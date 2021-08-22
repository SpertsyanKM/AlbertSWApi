import {API_URL} from './constants';

type GetApi = <T>(url: string) => Promise<T>;
export const getApi: GetApi = async <T>(url: string) => {
  const completeUrl = `${API_URL}${url}`;
  const response = await fetch(completeUrl, {method: 'GET'});
  const data = await response.text();
  const parsedData: T = JSON.parse(data);
  return parsedData;
};
