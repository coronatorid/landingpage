import httpClient from '../../utils/httpClient';
import Cookies from 'js-cookie';

export default {
  getUser: () => {
    const {accessToken} = Cookies;
    return httpClient.get('/user', {
      headers: {
        'Authorization': accessToken || '',
      }
    })
  },
}
