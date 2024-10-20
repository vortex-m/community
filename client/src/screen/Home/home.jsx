import React, { useState } from "react";
import ForYou from "./components/foryou";
import Following from "./components/following";

function Home() {
  const [activeTab, setActiveTab] = useState("ForYou");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <ul className="flex justify-around w-full border-b">
        <li
          className={`cursor-pointer w-full text-center py-2 ${
            activeTab === "forYou" ? "font-bold border-b-2 border-blue-500" : ""
          }`}
          onClick={() => handleTabChange("forYou")}
        >
          For You
        </li>
        <li
          className={`cursor-pointer w-full text-center py-2 ${
            activeTab === "following"
              ? "font-bold border-b-2 border-blue-500"
              : ""
          }`}
          onClick={() => handleTabChange("following")}
        >
          Following
        </li>
      </ul>

      <div className="mt-4">
        {activeTab === "forYou" ? (
          <div>
            <ForYou />
          </div>
        ) : (
          <div>
            <Following />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
