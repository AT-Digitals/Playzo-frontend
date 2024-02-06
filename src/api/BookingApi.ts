import { handleApiError } from "../Utils/ApiUtils";
import FilterUtils from "../Utils/FilterUtils";
import axiosInstance from "./CreateAxiosInstance";

export default class BookingApi {
  public static async createBooking(booking?: any) {
    try {
      const details = await axiosInstance.post("/bookings", booking);
      return details.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create booking");
    }
  }

  static async updateAmount(bookingId: string, request: any) {
    try {
      const amount = await axiosInstance.put<any>(
        `/bookingAmount/${bookingId}`,
        request
      );
      return amount.data;
    } catch (e) {
      throw handleApiError(e, "Failed to update amount");
    }
  }

  public static filter = async (filter: any) => {
    try {
      const datails = await axiosInstance.get<any[]>(
        `/bookingFilter/filterBookings` + FilterUtils.getQueryString(filter)
      );
      return datails.data;
    } catch (e) {
      throw handleApiError(e, "Failed to list bookings");
    }
  };

  public static async filterDateBooking(request: any) {
    try {
      const datails = await axiosInstance.get<any[]>(
        `/bookingFilter/filterDateBookings` +
          FilterUtils.getQueryString(request)
      );
      return datails.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create booking");
    }
  }
  public static async getAll() {
    try {
      const details = await axiosInstance.get<any[]>(`/bookings`);
      return details.data;
    } catch (e) {
      throw handleApiError(e, "Failed to get all details");
    }
  }

  public static async getAllPaging(value: any) {
    try {
      const details = await axiosInstance.get<any[]>(
        `/bookingFilter/filterPaging?page=${value.page}&&limit=${value.limit}`
      );
      return details.data;
    } catch (e) {
      throw handleApiError(e, "Failed to get all details");
    }
  }

  public static async filterPage(request: any) {
    try {
      const datails = await axiosInstance.get<any[]>(
        `/bookingFilter/filterPage` + FilterUtils.getQueryString(request)
      );
      return datails.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create booking");
    }
  }

  public static async filterBook(request: any) {
    try {
      const datails = await axiosInstance.get<any[]>(
        `/bookingFilter/filterBook` + FilterUtils.getQueryString(request)
      );
      return datails.data;
    } catch (e) {
      throw handleApiError(e, "Failed to create booking");
    }
  }

  public static async getBookingById(bookingId: string) {
    try {
      const detail = await axiosInstance.get<any>(`/bookings/${bookingId}`);
      return detail.data;
    } catch (e) {
      throw handleApiError(e, "Failed to get booking");
    }
  }
}
