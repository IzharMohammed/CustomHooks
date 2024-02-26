// https://www.npmjs.com/package/js-cookie

import React, { useState } from "react";
import Cookies from "js-cookie";
export const useLogin = () => {
  const [loggedIn, setloggedIn] = useState(Cookies.get("login") === "true");

  const handlelogin = () => {
    Cookies.set("login", "true");
    setloggedIn(true);
  };
  const handlelogout = () => {
    Cookies.remove("login");
    setloggedIn(false);
  };
  return {
    loggedIn,
    handlelogin,
    handlelogout,
  };
};
