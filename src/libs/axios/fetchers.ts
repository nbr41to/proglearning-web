import axios from 'axios';

export const axiosGetFetcher = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);

  return response.data;
};

export const axiosGetQueryFetcher = async <T, U = undefined>(
  arg: [string, U]
): Promise<T> => {
  const [url, query] = arg;
  const response = await axios.get<T>(url, query && { params: query });

  return response.data;
};

export const axiosPostFetcher = async <T, U>(
  url: string,
  { arg }: { arg: U }
): Promise<T> => {
  const response = await axios.post<T>(url, arg);

  return response.data;
};
