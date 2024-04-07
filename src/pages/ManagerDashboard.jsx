import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GoPersonFill } from "react-icons/go";
import MListOfApplicants from "./MListOfApplicants";

import MOperationsOfficer from "./MOperationsOfficer";
import MTbiBoardEvaluation from "./MTbiBoardEvaluation";
export default function ManagerDashboard() {
  const menus = [
    {
      name: "List of Applicants",
      // link: "/mlistofapplicants",
      icon: GoPersonFill,
      component: MListOfApplicants,
    },
    {
      name: "Operations Officer Eval Results",
      // link: "/moperationsOfficer",
      icon: GoPersonFill,
      component: MOperationsOfficer, // Replace with your component
    },
    {
      name: "TBI Board Evaluation",
      // link: "/mtbiBoardEvaluation",
      icon: GoPersonFill,
      component: MTbiBoardEvaluation, // Replace with your component
    },
  ];
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <>
      <div className="  flex bg-gray-600 w-full">
        <div
          className={`bg-slate-700 min-h-screen ${
            open ? "w-80" : "w-16"
          } duration-500 text-gray-100 flex flex-col justify-between`}
        >
          <div>
            <div className="py-3 flex justify-end pr-5">
              <FiMenu
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 ${
                    activeMenu === menu.name
                      ? "border-r-2 border-yellow-200 bg-gray-800"
                      : ""
                  }`}
                  onClick={() => handleMenuClick(menu.name)}
                >
                  <div className="pl-3">
                    {React.createElement(menu?.icon, {
                      size: "20",
                    })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-10 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
          <div className="p-2 text-start">
            <Link to="/manager">Logout</Link>
          </div>
        </div>
        {/* <div className=" w-screen h-screen border-2 border-green-500">
          <Routes>
            {menus.map((menu, index) => (
              <Route
                key={index}
                path={menu.link}
                element={<menu.component />}
              />
            ))}
          </Routes>
        </div> */}
        <div className="w-w80">
          <div className="">
            <div className="font-primary text-black text-5xl m-20">
              WELCOME MANAGER!
            </div>
            {menus.map((menu, index) =>
              activeMenu === menu.name ? <menu.component key={index} /> : null
            )}
          </div>
        </div>
      </div>
    </>
  );
}
