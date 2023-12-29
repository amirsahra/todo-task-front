import axios from "axios";

const apis = axios.create({
    baseURL: "http://127.0.0.1:8000/api/V1/"
})

export default apis