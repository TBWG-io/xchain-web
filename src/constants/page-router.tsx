import React from "react";
import { ROUTE } from "./routes";
import { PAGE } from "./constants";
import Home from "@pages/home";
import English from "@pages/english";
import ConnectXChain from "@pages/connect-x-chain";

const PAGE_ROUTER = [
  {
    path: ROUTE.HOME,
    component: <Home />,
    code: PAGE.HOME,
    exact: true,
  },
  {
    path: ROUTE.ENGLISH,
    component: <English />,
    code: PAGE.ENGLISH,
    exact: true,
  },
  {
    path: ROUTE.CONNECT_X_CHAIN,
    component: <ConnectXChain />,
    code: PAGE.CONNECT_X_CHAIN,
    exact: true,
  },
];

export default PAGE_ROUTER;
