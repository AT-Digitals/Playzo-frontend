import axiosInstance from "./CreateAxiosInstance";
import { handleApiError } from "../Utils/ApiUtils";

export default class UserApi {
  public static async createUser(details?: any) {
    try {
      const user = await axiosInstance.post("/newUsers", details);
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create details");
    }
  }
  public static async updateById(userId: string, request: any) {
    try {
      const user = await axiosInstance.put(`/${userId}`, request);
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create details");
    }
  }
  public static async sendOtp(email: any) {
    try {
      const user = await axiosInstance.put(`/sendOtp`, email);
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create details");
    }
  }
  public static async otpVerification(email: string, otp: string) {
    try {
      const user = await axiosInstance.get(`/otpVerification/${email}/${otp}`);
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create details");
    }
  }
  public static async forgotPassword(email: string, request: any) {
    try {
      const user = await axiosInstance.put(`/${email}`, request);
      return user.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create details");
    }
  }
}
