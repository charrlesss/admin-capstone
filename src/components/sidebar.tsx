import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import Icon from "awesome-react-icons";
import { FaChevronRight } from "react-icons/fa";
import "../assets/sidebar.css";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { SidebarDataRoutesTypes } from "../features/Administrative/data/sidebar-data-routes";
import { items } from "../features/Administrative/data/search-data-routes";

export const SideBar: React.FC<{
  callback: (value: boolean) => void;
  sidebarItems: Array<SidebarDataRoutesTypes>;
}> = ({ callback, sidebarItems }): JSX.Element => {
  const naviagte = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const formatResult = (item: { id: number; name: string }) => {
    return (
      <div>
        <span>{item.name}</span>
      </div>
    );
  };

  const handleOnSelect = (item: any) => {
    switch (item.id) {
      case 0:
        naviagte("/admin");
        break;
      case 1:
        naviagte("/admin/facilities");
        break;
      case 2:
        naviagte("/admin/facilities/schedule");
        break;
      case 3:
        naviagte("/admin/facilities/active-shipment");
        break;
      case 4:
        naviagte("/admin/facilities/assigning-drivers");
        break;
      case 5:
        naviagte("/admin/facilities/reserve-transaction");
        break;
      case 6:
        naviagte("/admin/transaction-document");
        break;
      case 7:
        naviagte("/admin/transaction-document/processing-shipping");
        break;
      case 8:
        naviagte("/admin/transaction-document/drivers-entries");
        break;
      case 9:
        naviagte("/admin/transaction-document/bills-landing");
        break;
      case 10:
        naviagte("/admin/transaction-document/managing-budget");
        break;
      case 11:
        naviagte("/admin/transaction-document/payroll");
        break;
      case 12:
        naviagte("/admin/legal");
        break;
      case 13:
        naviagte("/admin/legal/company-policies");
        break;
      case 14:
        naviagte("/admin/legal/complians-management");
        break;
      case 15:
        naviagte("/admin/legal/complians-transaction");
        break;
      case 16:
        naviagte("/admin/legal/feedback");
        break;
      case 17:
        naviagte("/admin/visitor");
        break;
      case 18:
        naviagte("/admin/visitor/customer-queries");
        break;
    }
  };

  return (
    <React.Fragment>
      <div
        onClick={(): void => {
          setSidebarOpen(() => true);
          callback(true);
        }}
        className={`${
          sidebarOpen ? "-left-full" : "left-4"
        } z-[100] transition-all duration-450 ease-out-in absolute  top-[50%] -translate-y-1/2 w-auto h-auto text-[3rem] font-thin text-primary cursor-pointer hover:text-[3.5em]`}
      >
        <FaChevronRight />
      </div>
      <div
        className={` bg-primary  min-h-full max-auto absolute left-0 w-[300px]  transition-all duration-400 ease-out-in bg-white shadow-sm shadow-black ${
          !sidebarOpen && "-left-full"
        }`}
      >
        <div className="flex items-center px-4  text-center py-4 z-[100]  text-white">
          <span className="flex-1 mx-2 text-lg  font-normal font-['Bebas_Neue'] tracking-[2px] ">
            admin
          </span>
          <button
            onClick={(): void => {
              setSidebarOpen(() => false);
              callback(false);
            }}
            type="button"
            className="z-[100]"
          >
            <Icon name="burger" className="w-6 h-6" />
          </button>
        </div>
        <div className="w-full relative px-2 z-[100]">
          <ReactSearchAutocomplete
            items={items}
            onSelect={handleOnSelect}
            formatResult={formatResult}
          />
        </div>
        <div className="z-[90] relative flex flex-col pb-4 mt-3  font-['Bebas_Neue'] tracking-[2px] px-2 ">
          <Navigation
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
              naviagte(itemId);
            }}
            items={sidebarItems as any}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
