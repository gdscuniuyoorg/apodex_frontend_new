import { ApiRequestClient } from "@/shared/api-clients";
import { ApiRoutes } from "./apiRoutes";
import { _getUserToken } from "./authServices";
import axiosInstance from "@/shared/axios.instance";
import axios from "axios";

class UserService {
  // Onboard user service
  async completeProfile(data: any) {
    try {
      const response = await ApiRequestClient.patch(ApiRoutes.completeProfile, {
        ...data,
      });

      if (!response) {
        throw new Error("Unexpected error occurred. Please try again.");
      }

      if (response?.data === false) {
        const errorMessage =
          response.data.message || "Invalid login credentials supplied.";
        throw new Error(errorMessage);
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Upload user image service
  async uploadUserImage(image: File | string) {
    try {
      const imgData = new FormData();
      imgData.append("photo", image);

      // Image upload does not use crude upload mechanism
      const response = await axiosInstance.patch(
        ApiRoutes.uploadUserImage,
        imgData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${_getUserToken()}`,
          },
        }
      );

      if (!response) throw new Error("Failed to upload image.");

      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async getProfile(userId: string) {
    try {
      const route = userId
        ? `${ApiRoutes.completeProfile}/${userId}`
        : `${ApiRoutes.completeProfile}/me`;

      const response = await ApiRequestClient.get(route);

      if (!response) throw new Error("Failed to get Profile");

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserService();
