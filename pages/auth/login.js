import {useRouter} from 'next/router';
import { useContext, useEffect, useState } from "react";
import TextError from "../../components/TextError";
import authApi from '../../services/api/authApi';
import Cookies from 'js-cookie';
import IntendedRouteContext from '../../contexts/IntendedRouteContext';

const Login = () => {
  const router = useRouter();
  const {url, setUrl} = useContext(IntendedRouteContext.Context);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    phone: '',
    otp_code: '',
    sent_time: '',
  });

  function handleChangeFormData(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  useEffect(() => {
    if(Cookies.get('accessToken')) {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if(countdown > 0) {
      setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown]);

  async function requestOtp(e) {
    try {
      e.preventDefault();
      setIsSubmit(true);
      setErrors({});

      const {
        phone
      } = formData;

      const response = await authApi.requestOtpCode({
        phone
      });

      const {
        sent_time
      } = response.data;

      setFormData({
        ...formData,
        sent_time
      });

      console.log('response Request OTP', response.data);

      setIsOtpSent(true);
      setCountdown(30);
    } catch (error) {
      console.log(error);
      if(error.response.status == 422) {
        const _errors = {...errors, phone: 'phone error'};
        setErrors(_errors);
      }
    } finally {
      setIsSubmit(false);
    }
  }

  async function verifyOtp(e) {
    try {
      e.preventDefault();
      setIsSubmit(true);
      setErrors({});

      const {
        phone,
        sent_time,
        otp_code
      } = formData;

      const response = await authApi.verifyOtpCode({
        phone,
        sent_time,
        otp_code
      });

      console.log('response Verify OTP', response.data);

      Cookies.set('accessToken', response.data.token);
      const _url = url;
      setUrl(null);
      router.push(_url || '/');
    } catch (error) {
      console.log(error);
      if(error.response.status == 422) {
        const _errors = {...errors, otp_code: 'error otp code'};
        setErrors(_errors);
      }
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <>
      {
        !isOtpSent ?
          (
            <form onSubmit={requestOtp}>
              <div className="mb-3">
                <label htmlFor="" className="block mb-2">Phone Number</label>
                <input
                  type="text"
                  className="block w-full rounded-md"
                  placeholder="Phone Number"
                  autoComplete="off"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChangeFormData}
                />
                {
                  errors.phone &&
                    <TextError>
                      {errors.phone}
                    </TextError>
                }
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-700 text-gray-100 px-3 py-2 disabled:opacity-50"
                  disabled={isSubmit || !formData.phone}
                  >Request OTP</button>
              </div>
            </form>
          ) :
          (
            <form onSubmit={verifyOtp}>
              <div className="mb-3">
                <label htmlFor="" className="block mb-2">OTP Code</label>
                <input
                  type="text"
                  className="block w-full rounded-md"
                  placeholder="OTP Code"
                  name="otp_code"
                  value={formData.otp_code}
                  onChange={handleChangeFormData}
                />
                {
                  errors.otp_code &&
                    <TextError>
                      {errors.otp_code}
                    </TextError>
                }
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-700 text-gray-100 px-3 py-2 disabled:opacity-50"
                  disabled={isSubmit || !formData.otp_code}
                >Verify & Login</button>
              </div>
            </form>
          )
      }
    </>
  )
}

export default Login;
