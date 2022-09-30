import React, { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../hooks/dispatch-selector.hooks";
import { WrapperWithSidebarContent } from "../../../../layouts/wrapper-with-sidebar-content";
import { selectClient, getClient } from "../../../../data/slices/client.slices";
import { useInterceptorAxios } from "../../../../lib/interceptor-axios";

export const AdminDashboardPage: React.FC = (): JSX.Element => {
  const getClientDetails: any = useAppSelector(selectClient);
  const { isAuthenticated, getAccessToken, instance } = useInterceptorAxios();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(
        getClient({
          ACCESS_TOKEN: getAccessToken() ,
          interceptor: instance,
        })
      );
    }
  }, [dispatch,isAuthenticated, getAccessToken, instance ]);


    console.log(getClientDetails)

  return (
    <WrapperWithSidebarContent>
      <main className="w-full min-h-full max-h-auto relative border-2 border-blue-300 ">
        admin
      </main>
    </WrapperWithSidebarContent>
  );
};
