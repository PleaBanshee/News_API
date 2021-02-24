import axios from 'axios';

const source = axios.CancelToken.source();

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    timeout: 30000,
    headers: { 'Authorization': `Bearer 7be5a33db897460498d807cf31d0709c` },
    cancelToken: source.token
});

instance.interceptors.response.use(response => response, (error) => {
    if (axios.isCancel(error)) {
        console.log('Request canceled', error.mesage);
        return Promise.reject(null);
    }

    return Promise.reject(error);
});


const getHeadLines = (page) => {
    const url = page ? `top-headlines?pageSize=20&language=en&category=${page}` :  'top-headlines?language=en'
    return instance.get(url);
}
const $cancel = () => source.cancel();

export { getHeadLines, $cancel }