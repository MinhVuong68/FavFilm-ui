import axios from 'axios';
import queryString from 'query-string';
import apiConfig from './apiConfig';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
//config` for the full list of configs

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify({ ...params, api_key: apiConfig.api_key }),
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);
export default axiosClient;
