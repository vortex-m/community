import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home/home";
import MainLayout from "./layout/main/layout";
import Login from "./screen/Auth/Login";
import Explore from "./screen/Explore/Explore";
import Notifications from "./screen/Notifications/Notifications";
import Bookmarks from "./screen/Bookmarks/bookmarks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
