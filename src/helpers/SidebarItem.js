import React from "react";
import { IoIosPeople } from "react-icons/io";
import { BiHomeSmile } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

export const sidebarItems = [
  {
    title: "Home",
    path: "/",
    icon: <BiHomeSmile />,
    cName: "navText",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIosPeople />,
    cName: "navText",
  },
  {
    title: "Services",
    path: "/services",
    icon: <BsCodeSlash />,
    cName: "navText",
  },
  {
    title: "Github",
    path: "/github",
    icon: <FiGithub />,
    cName: "navText",
  },
];
