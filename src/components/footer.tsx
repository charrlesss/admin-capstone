import React from "react";
import { Link } from "react-router-dom";
import {BsInfoSquareFill } from "react-icons/bs"
import {RiServiceFill} from 'react-icons/ri'
import {BsTelephoneForwardFill} from 'react-icons/bs'

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="px-4 bg-zinc-800 font-light font-['Bebas_Neue'] tracking-[4px]  text-sm w-full border py-2 md:hidden bg-secondary fixed bottom-0 left-0 right-0">
      <nav className="mx-auto ">
        <ul className="flex  h-full text-white items-center">
          <li className="flex-1 ">
            <Link
              to={"/about"}
              className="flex flex-col items-center justify-center h-full cursor-pointer "
            >
             <BsInfoSquareFill  className="text-[2em] rounded-md border p-1"/>
             <span className="text-[10px]">about</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link
              to={"/service"}
              className="flex flex-col items-center justify-center h-full cursor-pointer"
            >
              <RiServiceFill className="text-[2em] rounded-md border p-1"/>
              <span className="text-[10px]">service</span>
            </Link>
          </li>
          <li className="flex-1">
            <Link
              to={"/contact"}
              className="flex flex-col items-center justify-center h-full cursor-pointer"
            >
             <BsTelephoneForwardFill  className="text-[2em] rounded-md border p-1" />
              <span className="text-[10px]">contact us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
