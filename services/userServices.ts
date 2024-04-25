import { ApiRequestClient } from "@/shared/api-clients";
import { ApiRoutes } from "./apiRoutes";

export default class UserService {
  // Onboard user service
  static async completeProfile(data: any) {
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
  static async uploadUserImage(file: File) {
    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await ApiRequestClient.patch(ApiRoutes.uploadUserImage, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (!response) throw new Error("Failed to upload image.");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
