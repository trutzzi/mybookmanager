import axios from "axios";
import { API_URL } from "../constants/setup";
/**
 * Maybe here we can implement  Bearer Authentication token as a feature
 */
export const HTTP = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});
