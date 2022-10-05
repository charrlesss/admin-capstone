import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import getAuthentication from '../data/slices/authentication.slices'
import getClient from '../data/slices/client.slices'
import getAuthUser from '../features/shared/presentation/slices/auth-user.slice'
import getRegisterUser from './../features/shared/presentation/slices/register-user.slice';
import getLogoutClient from '../data/slices/logout.slice'
import getCompleteDetailsUser from '../features/shared/presentation/slices/complete-details'
import getFacilities from '../features/facilities/pages/slices/facilities.slice'

export const store = configureStore({
    reducer:{
      getAuthentication:getAuthentication,
      getClient:getClient,
      getAuthUser:getAuthUser,
      getRegisterUser:getRegisterUser,
      getLogoutClient:getLogoutClient,
      getCompleteDetailsUser:getCompleteDetailsUser,
      getFacilities:getFacilities
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
