import React from "react";
import "./Header.css";
import {
  Search,
  Home,
  SupervisorAccount,
  Chat,
  Notifications,
  BusinessCenter,
} from "@mui/icons-material";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const LogoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt=""
        />

        <div className="header_search">
          <Search />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="job" />
        <HeaderOption Icon={Chat} title="messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={LogoutApp} />
      </div>
    </div>
  );
}

export default Header;
