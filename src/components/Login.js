import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/UserSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInform] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const [errorMessage, setMessage] = useState(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInform(!isSignInForm);
  };
  const hanldeSubmitButtonClick = (e) => {
    e.preventDefault();
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const message = checkValidateData(emailVal, passwordVal);
    setMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //singup logic
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage(`${errorMessage}+${errorCode}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(`${errorMessage}+${errorCode}`);

          // ..
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(`${errorMessage}+${errorCode}`);
        });
    }
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
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full text-sm bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full text-sm bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full text-sm center bg-gray-700"
        />
        <p className="text-red-600 text-sm">{errorMessage}</p>
        <button
          className="p-4 my-4  text-sm text-center w-full bg-red-700 rounded-lg"
          onClick={hanldeSubmitButtonClick}
        >
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
