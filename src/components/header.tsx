import React from 'react'
import { Link } from 'react-router-dom';

export const TABS = [
    {
      name: "ABOUT",
      url: "/about",
    },
    {
      name: "SERVICES",
      url: "/services",
    },
    {
      name: "CONTACT US",
      url: "/contact",
    }
  ];

const Header:React.FC<{activeUrl?:string }> =(props):JSX.Element=>{
  return (
    <header className={"sticky w-full top-0 z-20 hidden md:block bg-white"}>
    <div className={` w-full bg-white shadow-2xl`}>
      <nav className={` text-lg font-light flex justify-between items-center container mx-auto py-2`}>
        <h1 className="px-4 font-['Bebas_Neue'] tracking-[4px]">FRAI <span className='text-red-400'>GHT</span></h1>
        <div className="flex items-center justify-center space-x-4">
          <ul className="text-white font-semibold items-stretch h-[40px] justify-center hidden md:flex">
            {TABS.map((tab: any, i) => {
              return (
                <li
                  key={i}
                  className={`font-['Bebas_Neue'] tracking-[4px] px-4 pb-1 flex justify-center items-center text-lg font-light text-black 
                   `}
                >
                  {tab.name === "POPCLUB" ? (
                    <button
                      className="tracking-[4px] text-black"
                    >
                      {tab.name}
                    </button>
                  ) : (
                    <Link to={tab.url}>{tab.name}</Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center space-x-3 lg:space-x-6">
          
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Header