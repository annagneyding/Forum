import axios from 'axios'

// необходима для упрощенной отправки запроса 
const instance = axios.create({
    baseURL: 'http://localhost:3002/api',
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance