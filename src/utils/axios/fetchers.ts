import axios from 'axios';

export const axiosGetFetcher = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);

  return response.data;
};

export const axiosPostFetcher = async <T, U>(
  url: string,
  { arg }: { arg: U }
): Promise<T> => {
  const response = await axios.post<T>(url, arg);

  return response.data;
};
