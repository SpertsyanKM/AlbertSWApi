import {API_URL} from './constants';

type GetApi = <T>(url: string, isCompleteUrl?: boolean) => Promise<T>;
export const getApi: GetApi = async <T>(url: string, isCompleteUrl = false) => {
  const completeUrl = isCompleteUrl ? url : `${API_URL}${url}`;
  const response = await fetch(completeUrl, {method: 'GET'});
  const data = await response.text();
  const parsedData: T = JSON.parse(data);
  return parsedData;
};
