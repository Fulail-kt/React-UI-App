
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";


function App(props) {
  function activekey() {
    var res = window.location.pathname;
    var baseUrl = process.env.PUBLIC_URL;
    baseUrl = baseUrl.split("/");
    res = res.split("/");
    res = res.length > 0 ? res[baseUrl.length] : "/";
    res = res ? "/" + res : "/";
    return res;
  }

  if (activekey() === "/sign-in" || activekey() === "/sign-up" || activekey() === "/password-reset" || activekey() === "/2-step-authentication" || activekey() === "/page-404") {
        return (
          <div id="mytask-layout" className="theme-indigo">
            <Routes>
              <Route path={`${process.env.PUBLIC_URL}/*`} element={<AuthIndex />}  />
            </Routes>
              
            
          </div>
        )
      }
      return (
        <div id="mytask-layout" className="theme-indigo">
          <Sidebar activekey={activekey()} history={props.history} />
            <Routes>
            <Route path={`${process.env.PUBLIC_URL}/*`} element={<MainIndex activekey={activekey()} />} />
            </Routes>
        </div>
      );
    }



export default App;
