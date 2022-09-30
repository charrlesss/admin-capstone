import axios, { AxiosInstance } from "axios";

export interface AuthenticationResponse {
  data: {
    messages:string ,
    success:boolean,
    user:{
      REFRESH_TOKEN:string,
      ACCESS_TOKEN:string,
      _id:any
    }
  };
}

const REACT_APP_API = process.env.REACT_APP_API;

export function AuthenticationRepository(): Promise<AuthenticationResponse> {
  return axios.get(`${REACT_APP_API}/authenticated-user`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}

export function GetClientRepository(params: {
  ACCESS_TOKEN:string,
  interceptor:AxiosInstance
}): Promise<any> {
  return params.interceptor.get(`/get-client-details`, {
    headers: {
         Authorization: `Bearer ${params.ACCESS_TOKEN}`,
    },
  });
}
