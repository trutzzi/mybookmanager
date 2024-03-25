import axios from 'axios'
import { API_URL } from '../constants/setup'

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export const fetcher = (url: string) => instance.request({ url }).then(res => res.data).catch(e => {
  throw new Error(e);
})  