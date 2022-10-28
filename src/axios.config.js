import axios from "axios"

export const MyBestHealthAPI = axios.create({
    baseURL: 'http://localhost:5000'
})