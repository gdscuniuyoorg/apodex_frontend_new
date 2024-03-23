import toast from "react-hot-toast";
import { ApiRoutes } from "./apiRoutes";
import { ApiRequestClient } from "@/shared/api-clients";

export const _saveToken = (token: any) => {
  localStorage.setItem("apodex", token);
};

export const _getUserToken = () => {
  return localStorage.getItem("apodex");
};

export const _clearToken = () => {
  localStorage.removeItem("apodex");
};

export default class AuthService {
  static async login({
    phone: phone_number,
    password,
  }: {
    phone: string;
    password: string;
  }) {
    try {
      const response = await ApiRequestClient.post(ApiRoutes.login, {
        phone_number,
        password,
      });

      if (!response) {
        throw new Error("Unexpected error occurred. Please try again.");
      }

      if (response?.data === false) {
        const errorMessage = response.data.message || "Invalid login credentials supplied.";
        throw new Error(errorMessage);
      }

      _saveToken(response.data.data.token);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}
