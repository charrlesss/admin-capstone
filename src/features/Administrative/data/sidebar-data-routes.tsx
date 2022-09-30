import React from "react";
import Icon from "awesome-react-icons";
import { BiTransferAlt } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { GiScales } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi";
import {BsCalendarCheck} from 'react-icons/bs'
import {ImTruck} from 'react-icons/im'
import {MdLocalPolice} from 'react-icons/md'
import {BsQuestionLg} from 'react-icons/bs'
import '../../../assets/icon.css'

export interface SidebarDataRoutesTypes {
  title: React.ReactElement | string;
  itemId: string;
  elemBefore?: () => React.ReactElement;
  subNav?: Array<SidebarDataRoutesTypes>;
}

export const sidebarDataRoutes: Array<SidebarDataRoutesTypes> = [
  {
    title: <h1 className="whitespace-pre duration-300 ">Reservation</h1>,
    itemId: "/admin",
    elemBefore: () => <AiOutlineLineChart />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">facilities</h1>,
    itemId: "/admin/facilities",
    elemBefore: () => <Icon name="user" />,
    subNav: [
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">reserve transaction</h1>
        ),
        itemId: "/admin/facilities/reserve-transaction",
        elemBefore: () => <BsCalendarCheck />,
      },
    ],
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">transaction</h1>,
    itemId: "/admin/transaction-document",
    elemBefore: () => <BiTransferAlt />,
    subNav: [
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">processing shipping</h1>
        ),
        itemId: "/admin/transaction-document/processing-shipping",
        elemBefore: () => <ImTruck />,
      }
    ],
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">legal</h1>,
    itemId: "/admin/legal",
    elemBefore: () => <GiScales />,
    subNav: [
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">company policies</h1>
        ),
        itemId: "/admin/legal/company-policies",
        elemBefore: () => <MdLocalPolice />,
      }
    ],
  },

  {
    title: <h1 className="whitespace-pre duration-300 ">visitor</h1>,
    itemId: "/admin/visitor",
    elemBefore: () => <HiOutlineIdentification />,
    subNav: [
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">customer queries</h1>
        ),
        itemId: "/admin/visitor/customer-queries",
        elemBefore: () => <BsQuestionLg/>,
      }
    ],
  },
];
