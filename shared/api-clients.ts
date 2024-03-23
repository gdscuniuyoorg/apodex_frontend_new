import { _getUserToken } from "@/services/authServices";
import axiosInstance from "./axios.instance";

class ApiClient {
  get(path: string, params: any | null = null) {
    const headers = this.getHeaders();
    return axiosInstance.get(path, {
      params,
      headers,
    });
  }

  post(path: string, payload: any, headers = {}) {
    return axiosInstance.post(path, payload, {
      headers: { ...this.getHeaders(), ...headers },
    });
  }

  delete(path: string, params: any) {
    return axiosInstance.delete(path, {
      params,
    });
  }

  patch(path: any, payload: any = {}, headers = {}) {
    return axiosInstance.patch(path, payload, {
      headers: { ...this.getHeaders(), ...headers },
    });
  }

  put(path: any, payload: any, headers = {}) {
    return axiosInstance.put(path, payload, {
      headers: { ...this.getHeaders(), ...headers },
    });
  }

  getHeaders() {
    const headers = {
      Authorization: `Bearer ${_getUserToken()}`,
      "tenant-id": "64cd4f4ea3219dee18c82f6b",
    };
    return headers;
  }
}

export const ApiRequestClient = new ApiClient();
