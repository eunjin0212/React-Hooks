import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const { name, loggedIn } = useContext(UserContext);
  console.log(name);
  return (
    <header>
      <a href="#"> Home</a> Hello,{name}, you are{""}
      {loggedIn ? "logged in" : "anonymous"}
    </header>
  );
};

export default Header;
