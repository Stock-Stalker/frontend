import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_URI,
})

api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'token'
)}`

export default api
