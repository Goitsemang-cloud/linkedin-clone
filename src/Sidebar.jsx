import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://wallpapercave.com/uwp/uwp1553073.jpeg" alt="" />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,554</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,222</p>
        </div>
      </div>
      <div className="sidebar__botton">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("nextjs")}
        {recentItem("programming")}
        {recentItem("SQl")}
        {recentItem("Softwareengineering")}
        {recentItem("Data analysis")}
      </div>
    </div>
  );
}

export default Sidebar;
