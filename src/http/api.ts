import { AxiosRequestConfig } from 'axios';
import HttpClient from './httpClientInterceptor';
import { HOLIDAYS_API_BASE } from '../config/constants';

class Api extends HttpClient {
  public constructor() {
    super(HOLIDAYS_API_BASE);
  }

  public async get<TResponse>(url:string, config?: AxiosRequestConfig) {
    return this.instance.get<TResponse>(url, this.getBasicConfig(config));
  }

  private getBasicConfig(config?: AxiosRequestConfig):AxiosRequestConfig {
    return {
      headers: {
        'x-api-version': '1.0.0',
        'Content-Type': 'application/json',
      },
      ...config,
    };
  }

}

export default Api;
