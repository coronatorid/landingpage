import axios from 'axios';
import Cookies from 'js-cookie';
import router from 'next/router';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
  headers: {}
});

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if(error.response.status == 401) {
      Cookies.remove('accessToken');
    }
    return error;
  }
)

export default instance;
