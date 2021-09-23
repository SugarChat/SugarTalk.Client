import axios from 'axios';
import Env from '../config/env';

const instance = axios.create({
    baseURL: Env.apiUrl,
    headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    }
});

/** 请求拦截 */
instance.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer`
    return request;
},
(error) =>{
    return Promise.reject(error);
 }
)

export default instance
