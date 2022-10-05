import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import "../../../assets/icon.css";

export interface SidebarDataRoutesTypes {
  title: React.ReactElement | string;
  itemId: string;
  elemBefore?: () => React.ReactElement;
  subNav?: Array<SidebarDataRoutesTypes>;
}

export const sidebarDataRoutesOpen: Array<SidebarDataRoutesTypes> = [
  {
    title: <h1 className="whitespace-pre duration-300 ">dashboard</h1>,
    itemId: "/dashboard",
    elemBefore: () => <AiOutlineLineChart />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">facilities</h1>,
    itemId: "/dashboard/facilities",
    elemBefore: () => <FaRegBuilding />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">Sched your visit</h1>,
    itemId: "/dashboard/sched",
    elemBefore: () => <AiOutlineSchedule />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">features</h1>,
    itemId: "/",
    elemBefore: () => <MdOutlineFeaturedPlayList />,
  },

  {
    title: <h1 className="whitespace-pre duration-300 ">contact</h1>,
    itemId: "/contact",
    elemBefore: () => <AiTwotonePhone />,
  },
];

export const sidebarDataRoutesClose: Array<SidebarDataRoutesTypes> = [
  {
    title: <h1 className="whitespace-pre duration-300 ">dashboard</h1>,
    itemId: "/dashboard",
    elemBefore: () => <AiOutlineLineChart />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">facilities</h1>,
    itemId: "/dashboard/facilities",
    elemBefore: () => <FaRegBuilding />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">Sched your visit</h1>,
    itemId: "/dashboard/sched",
    elemBefore: () => <AiOutlineSchedule />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">features</h1>,
    itemId: "/",
    elemBefore: () => <MdOutlineFeaturedPlayList />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">contact</h1>,
    itemId: "/contact",
    elemBefore: () => <AiTwotonePhone />,
  },
];
