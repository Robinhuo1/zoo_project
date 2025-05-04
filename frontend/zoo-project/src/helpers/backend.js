import axios from "axios";
import {paginateAll} from "@/helpers/utils.js";

const baseUrl = import.meta.env.VITE_API_URL

const axiosHttp = axios.create({
  baseURL: baseUrl
})


class ApiService {
  constructor() {
  }
  async getObservation() {
    let url = `${baseUrl}observations/observations/`
    return paginateAll(url)
  }
  async postObservation(animal, behavior) {
    let url = `${baseUrl}observations/observations/`
    const response = await axiosHttp.post(url,
      {"animal": animal,
        "behavior": behavior,
      })
    return response.data
  }
}

export {axiosHttp, ApiService}
