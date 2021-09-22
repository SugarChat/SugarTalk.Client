import axios from 'axios';
import Env from '../config/index';

const instance = axios.create({
    baseURL: Env.defaultServerURL,
    timeout: 10000,
    Headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export default instance
