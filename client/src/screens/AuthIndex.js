

import React from "react";
import { Route, Routes } from "react-router-dom";
import LeftSide from "../components/Auth/LeftSide";
import Page404 from "../components/Auth/Page404";
import PasswordReset from "../components/Auth/PasswordReset";
import SignIn from "../components/Auth/SignIn";
import Signup from "../components/Auth/Signup";
import StepAuthentication from "../components/Auth/StepAuthentication";

function AuthIndex() {
  return (
    <div className="main p-2 py-3 p-xl-5 ">
      <div className="body d-flex p-0 p-xl-5">
        <div className="container-xxl">
          <div className="row g-0">
            <LeftSide />
            <Routes>
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<Signup />} />
              <Route path={`/password-reset`} element={<PasswordReset />} />
              <Route path={`/2-step-authentication`} element={<StepAuthentication />} />
              <Route path={`/page-404`} element={<Page404 />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthIndex;

