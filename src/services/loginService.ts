import axiosConfig from "@/configurations/axiosConfig";

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

export default { signIn };
