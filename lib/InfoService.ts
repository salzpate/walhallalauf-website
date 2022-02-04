import axios, { AxiosResponse } from 'axios';

class InfoService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getInfos = async (): Promise<AxiosResponse<any, any>> => {
    const baseUrl = process.env.STRAPI_API_URL as string;
    const apiKey = process.env.STRAPI_API_KEY as string;

    const config = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
    return axios.get(`${baseUrl}/infos`, config);
  };
}

const infoService = new InfoService();

export default infoService;
