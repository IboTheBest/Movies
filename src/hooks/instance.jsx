import axios from "axios";
import { API, TOKEN } from "./getEnv";

export const instance = () => axios.create({
    baseURL: API,
    headers:{Authorization:`Bearer ${TOKEN}`}
})