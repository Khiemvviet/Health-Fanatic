import React, { useState, useEffect } from "react";
import { IoFootball } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navigation } from "../constants";
import MenuSvg from "./MenuSvg";
import { GoChevronDown } from "react-icons/go";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { FcSportsMode } from "react-icons/fc";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [activeLink, setActiveLink] = useState("");  // State to track the active link

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleNavClick = (linkTitle) => {
    setActiveLink(linkTitle);  // Update active link
    setOpenNavigation(false);
    enablePageScroll();
    toggleSubmenu();
    window.scrollTo(0, 0);
  };

  const toggleSubmenu = (id) => {
    if (openSubmenu === id) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(id);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenSubmenu(null);
        setOpenNavigation(false);
        enablePageScroll();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed flex bg-n-4 w-full h-28 z-50 top-0 left-0 px-20 py-3">
        <div className=" flex justify-between items-center flex-1">
          <Link to="/">
            <FcSportsMode size={80} onClick={() => window.scrollTo(0, 0)} />
          </Link>
        </div>

        <nav
          className={`${openNavigation ? "flex" : "hidden"} text-n-1 font-bold justify-end bg-n-4 lg:flex`}
        >
          <div className="flex-1">
            <div className="flex flex-col gap-10 -mr-24 pb-5 px-20 mt-24 bg-n-4 justify-center items-center lg:flex-row lg:mt-9 lg:gap-20">
              {navigation.map((item) => (
                <div key={item.id} className="relative">
                  <Link
                    to={item.hasSubmenu ? "#" : item.url}
                    className={`text-n-1 hover:text-n-2 font-bold text-center flex flex-col lg:flex-row ${
                      activeLink === item.title ? "text-red-500" : ""
                    }`} // Apply active class
                    onClick={() => {
                      if (item.hasSubmenu) {
                        toggleSubmenu(item.id);
                      } else {
                        handleNavClick(item.title); // Pass the item title to set it as active
                      }
                    }}
                  >
                    {item.title}
                    {!openNavigation && item.hasSubmenu && (
                      <GoChevronDown
                        className={`ml-2 mt-1  transform transition-transform ${
                          openSubmenu === item.id ? "rotate-180" : ""
                        }`}
                        size={16}
                        color="white"
                      />
                    )}
                  </Link>

                  {!openNavigation ? (
                    item.hasSubmenu &&
                    openSubmenu === item.id && (
                      <div className="absolute w-auto mt-6 -ml-5 z-10 rounded-lg bg-n-4 shadow-lg">
                        {item.submenu.map((submenuItem) => (
                          <Link
                            key={submenuItem.id}
                            to={submenuItem.url}
                            className="block px-8 py-2 text-n-1 hover:text-n-2 mt-2 text-sm"
                            onClick={() => handleNavClick(item.title)} // Mark submenu's parent as active
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    )
                  ) : (
                    item.hasSubmenu && (
                      <div>
                        {item.submenu.map((submenuItem) => (
                          <Link
                            key={submenuItem.id}
                            to={submenuItem.url}
                            className="text-n-1 hover:text-n-2 text-sm flex text-center flex-col"
                            onClick={() => handleNavClick(item.title)} // Mark submenu's parent as active
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        <div className="lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </div>
    </>
  );
};

export default Header;
