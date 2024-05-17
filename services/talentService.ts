import { ApiRequestClient } from "@/shared/api-clients";
import { ApiRoutes } from "./apiRoutes";

export default class TalentService {
  // Onboard user service
  static async getAllTalents() {
    try {
      const response = await ApiRequestClient.get(
        `${ApiRoutes.completeProfile}?page=1&limit=10`
      );

      if (!response) {
        throw new Error("Unexpected error occurred. Please try again.");
      }

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
