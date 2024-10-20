import React from "react";

function Cards({ img, title, description, actionButton }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center p-4">
      <div>
        <img src={img} alt={title} className="w-16 h-16 rounded-full" />
      </div>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-4">{actionButton}</div>
      </div>
    </div>
  );
}

export default Cards;
