import axios from "axios";

let baseURl = "http://localhost:5000"
export const $host = axios.create({
  withCredentials: true,
  baseURL: `${baseURl}`
})

export default $host