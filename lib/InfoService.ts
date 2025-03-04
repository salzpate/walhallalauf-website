import { FilteredResponseQueryOptions, type SanityDocument } from "next-sanity";
import { client } from "./sanityClient";

const POSTS_QUERY = '*[_type == "info"]{ _id, title, message }';

const options: FilteredResponseQueryOptions = { next: { revalidate: 30 } };

class InfoService {
  getInfos = async (): Promise<SanityDocument[]> => {
    return client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  };
}

const infoService = new InfoService();

export default infoService;
