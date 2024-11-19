import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import app from "../../Firebase/config.init";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { signInUser } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate(); // Get the navigate function

  // Define handleSubmit to manage the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        toast.success("Login successful! Redirecting...");
        // Redirect to the home page or dashboard
        setTimeout(() => {
          navigate("/"); // Use navigate to redirect
        }, 2000); // Optional delay for feedback
        return;
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`); // Handle errors
      });
    e.target.reset();
  };

  // Log in by Google

  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);
  const handleSubmitByGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const name = res.user.displayName;
        const email = res.user.email;
        const creationTime = res.user.metadata.creationTime;
        const lastSignInTime = res.user.metadata.lastSignInTime;
        const photoURL = res.user.photoURL;

        const user = {
          name,
          email,
          creationTime,
          lastSignInTime,
          photoURL,
        };
        console.log(user);

        // const user = { res };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("Successfully log In!");
            }

            setTimeout(() => {
              navigate("/"); // Use navigate to redirect
            }, 2000); // Optional delay for feedback
            return;
          })
          .catch((error) => setError(error));
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`); // Handle errors
      });
  };

  //  log in GitHub
  const gitProvider = new GithubAuthProvider();
  const handleSubmitByGitHub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        console.log(result.user);

        toast.success("Login successful! Redirecting...");
        // Redirect to the home page or dashboard
        setTimeout(() => {
          navigate("/"); // Use navigate to redirect
        }, 2000); // Optional delay for feedback
        return;
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`); // Handle errors
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-600 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {passwordVisible ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12m2.25 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm3.75 2a8.974 8.974 0 01-15 0m15 0a8.974 8.974 0 00-15 0"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.98 8.606A9.035 9.035 0 0112 5c3.147 0 5.97 1.692 7.52 4.606m-15.04 0A9.035 9.035 0 0112 19c3.147 0 5.97-1.692 7.52-4.606M3.98 8.606l16.04 10.606m0-10.606L3.98 19"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        {/* New Account Prompt */}
        <div className="mt-4 text-center text-gray-600">
          Are you new? Please{" "}
          <Link to="/reg" className="text-blue-500 hover:underline">
            go to create an account
          </Link>
          .
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 font-semibold">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Google Button */}
          <button
            type="button"
            onClick={handleSubmitByGoogle}
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.35 11.1h-9v2.8h5.5c-.55 1.8-2.1 3.4-5.5 3.4a6.3 6.3 0 1 1 0-12.6c1.6 0 3 .6 4 1.5L17.6 5.2a9 9 0 0 0-5.6-2A9 9 0 0 0 3.2 12a9 9 0 0 0 9 9c5.2 0 9-4 9-9 0-.7-.1-1.5-.2-2.2z" />
            </svg>
            Sign in with Google
          </button>

          {/* GitHub Button */}
          <button
            type="button"
            onClick={handleSubmitByGitHub}
            className="w-full flex items-center justify-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 1a11 11 0 0 0-3.5 21.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.7-1.4-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1 .1 2.6.6 3.1.5.1-1 .4-1.5.7-1.9-2.5-.3-5.1-1.3-5.1-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.6-1.3.1-2.8 0 0 1-.3 3.3 1.2.9-.2 2.2-.3 3.3-.3 1.1 0 2.4.1 3.3.3 2.3-1.5 3.3-1.2 3.3-1.2.7 1.5.2 2.5.1 2.8.7.8 1.2 1.9 1.2 3.3 0 4.4-2.6 5.4-5.1 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A11 11 0 0 0 12 1z" />
            </svg>
            Sign in with GitHub
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
