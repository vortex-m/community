import React from 'react';

function RightSideBar() {
  const followSuggestions = [
    { name: 'John Doe', username: '@john_doe', img: 'https://via.placeholder.com/50' },
    { name: 'Jane Smith', username: '@jane_smith', img: 'https://via.placeholder.com/50' },
    { name: 'Alice Johnson', username: '@alice_johnson', img: 'https://via.placeholder.com/50' },
    { name: 'Bob Brown', username: '@bob_brown', img: 'https://via.placeholder.com/50' }
  ];

  return (
    <div className="w-full max-w-xs p-4 bg-white h-screen overflow-y-auto">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200"
        />
      </div>

      {/* Who You Follow Card */}
      <div className="bg-gray-100 rounded-3xl  p-2">
        <h2 className="text-lg font-bold ml-2 mb-4">Who to Follow</h2>
        <ul>
          {followSuggestions.map((user) => (
            <li key={user.username} className="flex items-center justify-between mb-3 p-2 rounded-md hover:bg-gray-100 transition duration-200">
              {/* Profile Image */}
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 object-cover rounded-full border-2 border-gray-200 mr-3"
              />
              <div className="flex-1">
                <h3 className=" text-sm font-bold text-gray-800">{user.name}</h3>
                <p className="text-gray-600 text-[12px]">{user.username}</p>
              </div>
              <button className="text-white bg-black p-1 rounded-full px-3 font-semibold hover:underline transition duration-200">
                Profile
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightSideBar;
