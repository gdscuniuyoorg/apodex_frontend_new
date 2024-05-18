import axiosInstance from "@/shared/axios.instance";
import { ApiRoutes } from "./apiRoutes";
import { ApiRequestClient } from "@/shared/api-clients";
import { _getUserToken } from "./authServices";

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
    const response = await axiosInstance.post(ApiRoutes.createChallenge, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${_getUserToken()}`,
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

  static async getChallenges() {
    const response = await ApiRequestClient.get(ApiRoutes.createChallenge);

    if (!response) {
      return null;
    }

    if (response.data.status === "failed") {
      throw new Error(response.data.message);
    }

    return response.data;
  }

  static async getChallenge(id: string) {
    const response = await ApiRequestClient.get(
      `${ApiRoutes.createChallenge}/${id}`
    );

    if (!response) {
      return null;
    }

    if (response.data.status === "failed") {
      throw new Error(response.data.message);
    }

    return response.data;
  }
}
