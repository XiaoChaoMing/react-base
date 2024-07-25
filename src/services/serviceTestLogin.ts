import { IPostLogin } from '../models/login.model'
import { IResponse } from '../models/response.model'
import { ServiceBase } from './serviceBase'

class ServiceTestLogin extends ServiceBase {
  constructor(baseURL: string, onUnauthenticated: () => {}) {
    super(baseURL, onUnauthenticated)
  }

  // get UserInfo
  getUserInfo = async () => {
    const url = '/api/Users/info'
    const response: IResponse<any> = await this.service.get(url)
    if (response.status !== 1) {
      return
    }
    return response.data
  }

  // get UserInfo
  login = async (data: IPostLogin) => {
    const url = '/api/Users/authenticate'
    const response: IResponse<any> = await this.service.post(url, data)
    return response
  }
}

export { ServiceTestLogin }
