import axios from "axios";

axios.defaults.headers["Content-Type"] = " application/json";
// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

export const http = axios.create({});

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return error;
    }
);