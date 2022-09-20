import React from "react";
import { Helmet } from "react-helmet";
import { Outlet  ,useOutlet} from "react-router-dom";
import { useSideBarShowHideHooks } from "../hooks/side-bar-show-hide.hooks";
import { SideBar } from "./sidebar";
import { sidebarDataRoutes } from "../features/Administrative/data/sidebar-data-routes";

export const WrapperWithSidebarContent:React.FC<{children:JSX.Element }> = ({children }):JSX.Element => {
    const { callback, isShow } = useSideBarShowHideHooks();
  const outlet = useOutlet()
  return (
    <main className={`min-h-screen max-hauto`}>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <section className="relative w-full relative  min-h-[100vh] max-h-auto   flex  transition-all  ">
        <SideBar callback={callback} sidebarItems={sidebarDataRoutes} />
        <section
          className={`${
            isShow && " w-[300px] "
          }" xs:relative absolute  transition-all h-full  bg-transparent -z-[10]`}
        />
        <section className=" flex-1 transition-all duration-600   min-h-full max-h-auto relative transition-all xs:z-[1] -z-[100]">
        { outlet ? <Outlet /> : children}
        </section>
      </section>
    </main>
  )
}
