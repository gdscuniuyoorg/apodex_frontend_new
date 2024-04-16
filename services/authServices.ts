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
    email: email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const response = await ApiRequestClient.post(ApiRoutes.login, {
        email,
        password,
      });

      if (!response) {
        throw new Error("Unexpected error occurred. Please try again.");
      }

      if (response?.data === false) {
        const errorMessage = response.data.message || "Invalid login credentials supplied.";
        throw new Error(errorMessage);
      }

      _saveToken(response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async loginWithGoogle(code: string) {
    try {
      const response = await ApiRequestClient.post(ApiRoutes.googleLogin, { code });
  
      if (!response || !response.data) {
        throw new Error("Unexpected error occurred. Please try again.");
      }
  
      _saveToken(response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async signUp({
    email: email,
    password,
    passwordConfirm,
  }: {
    email: string;
    password: string;
    passwordConfirm: string;
  }) {
    try {
      const response = await ApiRequestClient.post(ApiRoutes.signup, {
        email,
        password,
        passwordConfirm
      });

      if (!response) {
        throw new Error("Unexpected error occurred. Please try again.");
      }

      if (response?.data === false) {
        const errorMessage = response.data.message || "Something went wrong!.";
        throw new Error(errorMessage);
      }

      _saveToken(response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  
}
