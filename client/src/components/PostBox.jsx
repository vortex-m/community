import React from "react";
import Button from "./Button";
import '../App.css'

function PostBox() {
  return (
    <div className="border-b p-2">
      <div className="flex space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full w-12 h-12"
        />

        <div className="flex-1">
          <textarea
            className="w-full rounded-lg scroll border-2 text-lg resize-none"
            placeholder="What's happening?"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex space-x-4 text-blue-500">
          <img
            src="https://via.placeholder.com/24"
            alt="Media"
            className="w-6 h-6 rounded-full cursor-pointer"
          />
        </div>

        <Button
          text={"Post"}
          onClick={() => console.log("Post")}
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        />
      </div>
    </div>
  );
}

export default PostBox;
