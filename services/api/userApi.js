import httpClient from '../../utils/httpClient'
import Cookies from 'js-cookie'

const accessToken = Cookies.get('accessToken')
httpClient.defaults.headers.Authorization = accessToken

export default {
  getUser: () => httpClient.get('/user')
}
