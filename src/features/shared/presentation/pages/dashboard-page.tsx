import React from "react";
import { WrapperWithSidebarContent } from "../../../../layouts/wrapper-with-sidebar-content";
import { CircleGraphComponent } from "../component/circle-graph.component";
import { BoxgraphComponent } from "../component/box-graph.component";
import { ShcedulesComponent } from "../component/shcedules.component";
import { VisitorsComponent } from "../component/visitors.component";
export const AdminDashboardPage: React.FC = (): JSX.Element => {
  return (
    <WrapperWithSidebarContent>
      <main className="w-full min-h-[100vh] max-h-auto relative mb-24 ">
        <div className="max-h-auto w-full grid xl:grid-cols-2  grid-cols-1 items-center  gap-10 ">
          <ShcedulesComponent />
          <div className="w-full  h-full border rounded-xl p-3 shadow shadow-lg bg-blue-900 shadow-lg shadow-blue-900">
            <BoxgraphComponent />
            <h1 className="sm:text-[25px]  text-[13px] sm:my-10 my-5 text-white">
              Monitoring
            </h1>
            <p className="text-white sm:text-sm  text-[11px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cum
              itaque nesciunt commodi voluptatum. Suscipit facilis deserunt sunt
              ad ex, nobis recusandae alias ea perspiciatis eum facere dicta
              beatae cumque.
            </p>
          </div>
        </div>

        <div className="mt-24 max-h-auto w-full grid xl:grid-cols-2  grid-cols-1 items-center  gap-5 ">
          <div className=" shadow-lg shadow-blue-600 relative w-full flex sm:space-x-10 sm:flex-row flex-col justify-center items-center bg-blue-900 p-10 rounded-lg shadow shadow-lg">
            <div className="  relative w-auto ">
              <CircleGraphComponent />
            </div>
            <div className="  relative w-auto">
              <CircleGraphComponent />
            </div>
          </div>
          <div className="w-full  h-full">
            <VisitorsComponent />
          </div>
        </div>
      </main>
    </WrapperWithSidebarContent>
  );
};
