import React, { useState } from "react";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  // Toggle between login and sign-up
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? "Create your account" : "Log in to Twitter"}
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Sign-Up additional field */}
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors">
          {isSignUp ? "Sign Up" : "Log In"}
        </button>

        {/* Toggle between login and sign-up */}
        <p className="text-center mt-4">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={handleToggle}
              >
                Log in
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={handleToggle}
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Login;
