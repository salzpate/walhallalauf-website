import axios, { AxiosResponse } from 'axios';

class InfoService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getInfos = async (): Promise<AxiosResponse<any, any>> => {
    const baseUrl = process.env.STRAPI_API_URL as string;

    return axios.get(`${baseUrl}/infos`);
  };
}

const infoService = new InfoService();

export default infoService;
