import axios from "axios";

const instance = axios.create({
    baseURL : 'https://68c7e9885d8d9f5147338df4.mockapi.io'
})

export default instance
