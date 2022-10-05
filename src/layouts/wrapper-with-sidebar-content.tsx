import React from "react";
import { Helmet } from "react-helmet";
import { Outlet, useOutlet } from "react-router-dom";
import { useSideBarShowHideHooks } from "../hooks/side-bar-show-hide.hooks";
import { SideBar } from "./sidebar";
import { ClientHeader } from "./client-header";
export const WrapperWithSidebarContent: React.FC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => {
  const { callback, isShow } = useSideBarShowHideHooks();
  const outlet = useOutlet();
  return (
    <main className={`min-h-screen max-hauto`}>
      <Helmet>
        <title>Admin</title>
      </Helmet>

      <section className="relative w-full relative  min-h-[100vh] max-h-auto   flex  transition-all  ">
        <SideBar callback={callback} isOpen={isShow} />
        <section className=" flex-1 transition-all duration-600  max-h-auto relative transition-all ">
          <ClientHeader callback={callback} open={isShow} />
          <div className="px-10">
          {outlet ? <Outlet /> : children}
          </div>
        </section>
      </section>
    </main>
  );
};
