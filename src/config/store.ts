import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import getAuthentication from '../data/slices/authentication.slices'
import getClient from '../data/slices/client.slices'
import getAuthUser from '../features/Administrative/presentation/slices/auth-user.slice'
import getRegisterUser from './../features/Administrative/presentation/slices/register-user.slice';

export const store = configureStore({
    reducer:{
      getAuthentication:getAuthentication,
      getClient:getClient,
      getAuthUser:getAuthUser,
      getRegisterUser:getRegisterUser
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
