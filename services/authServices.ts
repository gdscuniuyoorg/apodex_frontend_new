import { ApiRoutes } from "./apiRoutes";
import { ApiRequestClient } from "@/shared/api-clients";

export const _saveUserData = (userData: any) => {
  localStorage.setItem("userData", JSON.stringify(userData));
};

export const _getUserData = () => {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : null;
};

export const _clearUserData = () => {
  localStorage.removeItem("userData");
};

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
        const errorMessage =
          response.data.message || "Invalid login credentials supplied.";
        throw new Error(errorMessage);
      }

      // console.log("response from service", response)
      _saveToken(response.data.token);
      _saveUserData(response.data.user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async loginWithGoogle() {
    try {
      const response = await ApiRequestClient.get(ApiRoutes.googleLogin, null);

      if (!response || !response.data) {
        throw new Error("Unexpected error occurred. Please try again.");
      }

      console.log(response.data)

      _saveToken(response.data.token);
      _saveUserData(response.data.data);
      return response.data.url;
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
        passwordConfirm,
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
