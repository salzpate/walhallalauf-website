import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class InfoService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getInfos = async (): Promise<AxiosResponse<any, any>> => {
    const baseUrl = process.env.STRAPI_API_URL as string;
    const apiToken = process.env.STRAPI_API_TOKEN as string;

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    };

    return axios.get(`${baseUrl}/infos`, config);
  };
}

const infoService = new InfoService();

export default infoService;
