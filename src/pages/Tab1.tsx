import { IonPage, useIonRouter } from "@ionic/react";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const router= useIonRouter()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Implement login functionality here
    router.push("/home","forward","replace")
  };

  return (
    <IonPage className="bg-white h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-between space-y-8">
        {/* Logo */}
        <img src="/logo.png" className="h-32 w-32 mb-4" alt="App Logo" />

        {/* Login Form */}
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

          <div className="space-y-4 text-black">
            {/* Email Input */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="email" className="text-gray-600 font-semibold">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H8m0 0H5.65a2 2 0 00-2.15 2.43l1.5 6a2 2 0 002.15 1.57h10.7a2 2 0 002.15-1.57l1.5-6A2 2 0 0018.35 12H16z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border bg-white border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col space-y-1">
              <label htmlFor="password" className="text-gray-600 font-semibold">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c-2.28 0-4.13 1.85-4.13 4.13S9.72 19.26 12 19.26 16.13 17.41 16.13 15.13 14.28 11 12 11z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full py-3 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Login
            </button>

            {/* Sign Up Link */}
            <p className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default LoginPage;
