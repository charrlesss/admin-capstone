import axios from "axios";

export interface AuthParams {
  email: string;
  password: string;
}
export interface RegisterParams {
  fullname: string;
  gender: string;
  email: string;
  confirmPassword: string;
  birthdate: string;
  password: string;
}

export interface AuthUserResponse {
  data: {
    REFRESH_TOKEN: string;
    ACCESS_TOKEN: string;
    _id: any;
  };
}

export interface RegisterResponse {
  data:{
    messages: string;
    success: boolean;
  }
}

const REACT_APP_API = process.env.REACT_APP_API;

export function AuthUserRepository(
  params: AuthParams
): Promise<AuthUserResponse> {
  return axios.post(`${REACT_APP_API}/auth-user`, params, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}

export function RegisterRepository(params: RegisterParams): Promise<RegisterResponse> {
  return axios.post(`${REACT_APP_API}/register-user`, params, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}
