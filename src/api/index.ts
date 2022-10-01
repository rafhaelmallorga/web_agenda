import axios from "axios";

const api = axios.create({
    baseURL: "https://api-agenda-typescript.herokuapp.com",
    timeout: 5000
})

export default axios