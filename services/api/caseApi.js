import httpClient from '../../utils/httpClient'
import Cookies from 'js-cookie'

httpClient.defaults.headers.Authorization = Cookies.get('accessToken') || null

export default {
  reported: () => httpClient.get('/cases/reported'),
  reportedDetail: (id) => httpClient.get(`cases/reported/${id}`),
  reportedDetailUpdate: (id, data) => {
    const {isValid} = data
    return httpClient.patch(`cases/reported/${id}`, {
      isValid
    })
  },
}
