import React from "react";

import "./App.less";
import Router from "./PageRouter";
import { ENV } from "@constants/constants";
import { Suspense } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BACKGROUND_2 } from "@constants/asset";

function App() {
  // const location = useLocation();

  // disable console.log when environment isn't dev
  if (process.env.REACT_APP_ENV !== ENV.DEV)
    console.log = function no_console() {};

  return (
    <>
      <MainPanelStyle>
        <Router />
      </MainPanelStyle>
    </>
  );
}

const MainPanelStyle = styled.div`
  background-image: url(${BACKGROUND_2});
  background-repeat: no-repeat;
  background-origin: border-box;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;
`;

export default App;
