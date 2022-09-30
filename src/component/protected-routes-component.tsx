import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import {
  selectAuthentication,
  getAuthentication
} from "../data/slices/authentication.slices";
import {
  useAppSelector,
  useAppDispatch,
} from "../hooks/dispatch-selector.hooks";
import { BackdropLoading } from "../pages/loading.page";
export const ProtectedRoutesComponent = () => {
  const selectAuthenticated: any = useAppSelector(selectAuthentication);
  const dispatch = useAppDispatch();


  useEffect(()=>{
    dispatch(getAuthentication())
  },[dispatch])


  if(selectAuthenticated?.data === undefined){
    return <BackdropLoading open={true} />
  }

  return (
    <div>
      {selectAuthenticated?.data?.success ? (
          <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};
