import axiosConfig from "@/configurations/axiosConfig";
import { User } from "@/types/user";

export type SignInInfomation = {
  username: string;
  password: string;
  rememberPassword: boolean;
};
async function signIn(payload: SignInInfomation) {
  try {
    const response = await axiosConfig.axiosInstance.post(
      "/account/login",
      payload,
    );
    if (!response || response.status != 200) return undefined;

    const responseBody = await response.data;
    return responseBody;
  } catch (error) {
    console.error(error);
  }
}

async function signUp(payload: User) {
  try {
    const response = await axiosConfig.axiosInstance.post(
      "/account/create",
      payload,
    );
    if (!response || response.status != 200) return undefined;

    const responseBody = await response.data;
    return responseBody;
  } catch (error) {
    console.error(error);
  }
}

export default { signIn, signUp };
