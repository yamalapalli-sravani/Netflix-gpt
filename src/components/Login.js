import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInform(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="login-bg"
          className="absolute"
        />
      </div>
      <form className="w-3/12 p-8 bg-black absolute my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full text-sm bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full text-sm bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full text-sm center bg-gray-700"
        />
        <button className="p-4 my-4  text-sm text-center w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "SignUp"}
        </button>
        <p className="py-4 text-sm" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? signup now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
