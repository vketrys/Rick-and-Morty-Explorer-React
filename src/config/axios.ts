import axios from 'axios';
import { pagesQty } from 'pages/contentList/hasMore';

interface ServerResponse {
  data: ServerData;
}

interface ServerData {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
}

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

instance.interceptors.response.use(
  (response: ServerResponse) => {
    const { pages } = response.data.info;
    pagesQty.pages = pages;
    return response;
  },
  (error) => Promise.reject(error.message)
);

export default instance;
