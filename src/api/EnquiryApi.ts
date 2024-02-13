import axiosInstance from "./CreateAxiosInstance";
import { handleApiError } from "../Utils/ApiUtils";

export default class EnquiryApi {
  public static async createEnquiry(enquiry?: any) {
    try {
      const details = await axiosInstance.post("/enquiries", enquiry);
      return details.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create enquiry");
    }
  }
}
