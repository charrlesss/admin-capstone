import React from "react";
import { WrapperWithSidebarContent } from "../../../layouts/wrapper-with-sidebar-content";
import "../../../assets/font-sched.css";

export const ScheduleYourVisitPages: React.FC = (): JSX.Element => {
  return (
    <WrapperWithSidebarContent>
      <div className=" relative max-h-auto min-h-[500px] border flex items-center flex-col">
        <div className="sm:container sm:mx-auto w-full border">
          <h1 className="sm:text-[2.5em] text-[2rem] text-center">
            What are you ?
          </h1>

          <div className="shadow-lg rounded p-8 bg-white flex  flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map(
              (data: number, index: number): JSX.Element => {
                const randomColor: Array<string> = [
                  "bg-red-500",
                  "bg-orange-500",
                  "bg-amber-500",
                  "bg-yellow-500",
                  "bg-green-500",
                  "bg-teal-500",
                  "bg-sky-500",
                  "bg-blue-500",
                  "bg-indigo-500",
                  "bg-violet-500",
                  "bg-fuchsia-500",
                  "bg-rose-500",
                ];

                const randomColorGenerator = () => {
                  const con: Array<string> = [];
                  let rand = randomColor[Math.floor(Math.random() * 11)];
                  let result = "";
                  if (con.length !== 0 && con.includes(rand)) {
                    rand = randomColor[Math.floor(Math.random() * 11)];
                    con.push(rand);
                    result = rand;
                    return result;
                  }
                  result = rand;
                  con.push(rand);
                  return result;
                };
                console.log(randomColorGenerator())
                return (
                  <div
                    key={index}
                    className={`${randomColorGenerator()} text-center sm:p-10 sm:p-10 p-7   rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto`}
                  >
                    <span
                      className="sm:text-2xl text-md tracking-[2px] font-bold text-white "
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Employee
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </WrapperWithSidebarContent>
  );
};
