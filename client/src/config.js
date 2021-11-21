import axios from "axios"

export const axiosInstance = axios.create({ 
    baseURL : "https://lifestories-doancntt.herokuapp.com/api/"
})