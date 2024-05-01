import { ApiRoutes } from "./apiRoutes";
import { ApiRequestClient } from "@/shared/api-clients";

export default class ChallengeService {
  static async joinAChallenge(data: any) {
    const response = await ApiRequestClient.post(ApiRoutes.joinChallenge, {
      ...data,
    });
    if (!response) {
      return null;
    }

    if (response?.data?.status === "fail") {
      throw new Error(response.data.message);
    }

    return response.data;
  }

  static async createAChallenge(data: FormData) {
    const response = await ApiRequestClient.post(ApiRoutes.createChallenge, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (!response) {
      return null;
    }
  
    if (response?.data?.status === "fail") {
      throw new Error(response.data.message);
    }
  
    return response.data;
  }
}
