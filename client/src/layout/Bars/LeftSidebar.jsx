import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmark";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function LeftSidebar() {
  const menuItems = [
    { name: "Home", icon: <HomeIcon />, link: "/" },
    { name: "Explore", icon: <ExploreIcon />, link: "/explore" },
    {
      name: "Notification",
      icon: <NotificationsIcon />,
      link: "/notifications",
    },
    { name: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
    { name: "Bookmarks", icon: <BookmarksIcon />, link: "/bookmarks" },
    { name: "Logout", icon: <ExitToAppIcon />, link: "/logout" },
  ];

  return (
    <div className="flex flex-col justify-between h-screen p-4 bg-white w-full">
      <div className="flex items-center mb-4">
        <h1 className="ml-2 text-2xl font-bold">X</h1>
      </div>

      {/* Menu Items */}
      <div>
        <ul className="space-y-4 -mt-[40svh] ml-10">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center space-x-4 text-xl font-semibold hover:text-blue-500 cursor-pointer"
            >
              {item.icon}
              <Link to={item.link} className="flex-1">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Post Button */}
      <Button
        text="Post"
        className="bg-blue-500 text-white w-full py-2 rounded-3xl hover:bg-blue-600"
      />
    </div>
  );
}

export default LeftSidebar;
