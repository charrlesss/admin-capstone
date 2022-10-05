import axios, { AxiosInstance } from "axios";

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

export interface CompleteDetailsParams {
  gender: string;
  birthdate: string;
  ACCESS_TOKEN: string;
  insterceptor: AxiosInstance;
}

export interface AuthUserResponse {
  data: {
    REFRESH_TOKEN: string;
    ACCESS_TOKEN: string;
    _id: any;
  };
}

export interface RegisterResponse {
  data: {
    messages: string;
    success: boolean;
  };
}

export interface CompleteDetailsResponse {
  data: {
    messages: string;
    success: boolean;
  };
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

export function RegisterRepository(
  params: RegisterParams
): Promise<RegisterResponse> {
  return axios.post(`${REACT_APP_API}/register-user`, params, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}

export function CompleteDetailsRepository(
  params: CompleteDetailsParams
): Promise<CompleteDetailsResponse> {
  return params.insterceptor.post(
    `${REACT_APP_API}/complete-details`,
    { gender: params.gender, birthdate: params.birthdate },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.ACCESS_TOKEN}`,
      },
      withCredentials: true,
    }
  );
}
