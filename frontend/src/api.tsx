import axios from 'axios'
// import store from './store'

const api: any = axios.create({
    baseURL: process.env.REACT_APP_URI,
})

// let savedToken: string | null = null;

// const setToken = () => {
//     const token: string = store.getState().token;
//     if (token && token !== savedToken) {
//         api.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token')
//         savedToken = token
//     }
// };
//
// store.subscribe(setToken)
api.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token')

export default api
