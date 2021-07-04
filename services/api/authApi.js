import axios from 'axios';

export default {
  requestOtpCode: ({phone}) => {
    return axios.post('/api/login/requestOtpCode', {
      phone
    });
  },

  verifyOtpCode: ({code}) => {
    return axios.post('/api/login/verifyOtpCode', {
      code
    });
  }

}
