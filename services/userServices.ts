import { ApiRequestClient } from "@/shared/api-clients";
import { ApiRoutes } from "./apiRoutes";

export default class UserService {
    static async completeProfile(data: any) {
        try {
          const response = await ApiRequestClient.post(ApiRoutes.completeProfile, {
            ...data
          });
    
          if (!response) {
            throw new Error("Unexpected error occurred. Please try again.");
          }
    
          if (response?.data === false) {
            const errorMessage = response.data.message || "Invalid login credentials supplied.";
            throw new Error(errorMessage);
          }

          return response.data;
        } catch (error) {
          throw error;
        }
      }
}