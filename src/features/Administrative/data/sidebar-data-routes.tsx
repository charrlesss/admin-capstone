import React from "react";
import Icon from "awesome-react-icons";
import { BiTransferAlt } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";
import { GiScales } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi";
import { AiFillSchedule } from "react-icons/ai";
import { GrWheelchairActive } from "react-icons/gr";
import {AiOutlineCar} from 'react-icons/ai'
import {BsCalendarCheck} from 'react-icons/bs'
import {ImTruck} from 'react-icons/im'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {FaMoneyBill} from 'react-icons/fa'
import {GrMoney} from 'react-icons/gr'
import {FaHandHoldingUsd} from 'react-icons/fa'
import {MdLocalPolice} from 'react-icons/md'
import {GrCompliance} from 'react-icons/gr'
import {AiOutlineTransaction} from 'react-icons/ai'
import {VscFeedback} from 'react-icons/vsc'
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
    title: <h1 className="whitespace-pre duration-300 ">Dashboard</h1>,
    itemId: "/admin",
    elemBefore: () => <AiOutlineLineChart />,
  },
  {
    title: <h1 className="whitespace-pre duration-300 ">facilities</h1>,
    itemId: "/admin/facilities",
    elemBefore: () => <Icon name="user" />,
    subNav: [
      {
        title: <h1 className="whitespace-pre duration-300">schedule</h1>,
        itemId: "/admin/facilities/schedule",
        elemBefore: () => <AiFillSchedule style={{ color: "white" }} />,
      },
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">active shipment</h1>
        ),
        itemId: "/admin/facilities/active-shipment",
        elemBefore: () => (
            <GrWheelchairActive  className="icon"/>
        ),
      },
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">assigning drivers</h1>
        ),
        itemId: "/admin/facilities/assigning-drivers",
        elemBefore: () => <AiOutlineCar/>,
      },
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
      },
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">drivers entries</h1>
        ),
        itemId: "/admin/transaction-document/drivers-entries",
        elemBefore: () => <BsFillArrowRightSquareFill/>,
      },
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">bills of landing</h1>
        ),
        itemId: "/admin/transaction-document/bills-landing",
        elemBefore: () => <FaMoneyBill />,
      },
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">managing budget</h1>
        ),
        itemId: "/admin/transaction-document/managing-budget",
        elemBefore: () => <GrMoney  className="icon"/>,
      },
      {
        title: <h1 className="whitespace-pre duration-300 ">payroll</h1>,
        itemId: "/admin/transaction-document/payroll",
        elemBefore: () => <FaHandHoldingUsd/>,
      },
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
      },
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">
            complians to management
          </h1>
        ),
        itemId: "/admin/legal/complians-management",
        elemBefore: () => <GrCompliance className="icon"/>,
      },
      {
        title: (
          <h1 className="whitespace-pre duration-300 ">
            complians to transaction
          </h1>
        ),
        itemId: "/admin/legal/complians-transaction",
        elemBefore: () => <AiOutlineTransaction/>,
      },
      {
        title: <h1 className="whitespace-pre duration-300 ">feedback</h1>,
        itemId: "/admin/legal/feedback",
        elemBefore: () => <VscFeedback/>,
      },
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
