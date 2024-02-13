import axiosInstance from "./CreateAxiosInstance";
import { handleApiError } from "../Utils/ApiUtils";

export default class UserLoginApi {
  public static loginUser = async (request: any) => {
    try {
      const user = await axiosInstance.post<any>('/login', request);
      return user.data;
    } catch (e) {
      throw handleApiError(e, 'Failed to login user');
    }
  };

  public static logoutUser = async () => {
    try {
      const user = await axiosInstance.post('/auth/logout');
      return user.data;
    } catch (e) {
      throw handleApiError(e, 'Failed to logout user');
    }
  };
}
