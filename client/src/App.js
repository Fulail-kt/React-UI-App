// import React from "react";
// import { Switch, withRouter } from "react-router-dom";
// import Sidebar from "./components/common/Sidebar";
// import AuthIndex from "./screens/AuthIndex";
// import MainIndex from "./screens/MainIndex";
// import { Route, Routes } from "react-router-dom"

// function App(props) {
//   function activekey() {
//     var res = window.location.pathname
//     var baseUrl = process.env.PUBLIC_URL
//     baseUrl = baseUrl.split("/");
//     res = res.split("/");
//     res = res.length > 0 ? res[baseUrl.length] : "/";
//     res = res ? "/" + res : "/";;
//     const activeKey1 = res;
//     return activeKey1
//   }

//   if (activekey() === "/sign-in" || activekey() === "/sign-up" || activekey() === "/password-reset" || activekey() === "/2-step-authentication" || activekey() === "/page-404") {
//     return (
//       <div id="mytask-layout" className="theme-indigo">
//         <Switch>
//           <AuthIndex />
//         </Switch>
//       </div>
//     )
//   }
//   return (
//     <div id="mytask-layout" className="theme-indigo">
//       <Sidebar activekey={activekey()} history={props.history} />
//       <Switch>
//         <Routes>
//         <Route path={`${process.env.PUBLIC_URL}/*`} element={<MainIndex activekey={activekey()} />} />
//         </Routes>
//       </Switch>
//     </div>
//   );
// }


// export default withRouter(App);
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import AuthIndex from "./screens/AuthIndex";
import MainIndex from "./screens/MainIndex";
import SignIn from "./components/Auth/SignIn";

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

  // return (
  //   <div id="mytask-layout" className="theme-indigo">
      
  //     <Sidebar activekey={activekey()} history={props.history} />
  //     <Routes>
  //       <Route path={`${process.env.PUBLIC_URL}/`} element={<SignIn/>} />
  //       <Route path={`${process.env.PUBLIC_URL}/sign-in`} element={<AuthIndex />} />
  //       <Route path={`${process.env.PUBLIC_URL}/sign-up`} element={<AuthIndex />} />
  //       <Route path={`${process.env.PUBLIC_URL}/password-reset`} element={<AuthIndex />} />
  //       <Route path={`${process.env.PUBLIC_URL}/2-step-authentication`} element={<AuthIndex />} />
  //       <Route path={`${process.env.PUBLIC_URL}/page-404`} element={<AuthIndex />} />
  //       <Route path={`${process.env.PUBLIC_URL}/*`} element={<MainIndex activekey={activekey()} />} />
  //     </Routes>
  //   </div>
  // );


export default App;
