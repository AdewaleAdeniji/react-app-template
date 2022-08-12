import React from 'react';
import { APP_PREFIX_PATH } from "./AppConfig";
import { InsertChartOutlined, DashboardOutlined } from "@mui/icons-material";
const routes = [
  {
    key: "dashboard",
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: "Dashboard",
    icon: <DashboardOutlined/>,
    navbar: true,
    isAuthenticated: true,
    hasSubmenu: false,
    roles: 'admin'
  },
  {
    key: "enquiry",
    path: `#`,
    title: "Enquiry",
    icon: <InsertChartOutlined/>,
    navbar: true,
    isAuthenticated: true,
    hasSubmenu: true,
    submenu: [
      {
        key: "enquiry",
        path: `${APP_PREFIX_PATH}/enquiry-logs`,
        title: "Enquiry",
        icon: <InsertChartOutlined/>,
        navbar: false,
        isAuthenticated: true,
        hasSubmenu: false,
        roles: 'admin'
      },
      {
        key: "enquiry",
        path: `${APP_PREFIX_PATH}/enquiry-logs`,
        title: "Enquiry",
        icon: <InsertChartOutlined/>,
        navbar: false,
        isAuthenticated: true,
        hasSubmenu: false,
        roles: 'admin'
      }
    ],
    roles: 'admin'
  }
];
const navTree = [
  ...routes.filter((route) => {
    return route.navbar;
  }),
];

export { routes, navTree };
