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
import { AVATAR_LOGO, LOGIN_BG_IMAGE } from "../utils/constants";

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
            photoURL: AVATAR_LOGO,
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
        .then((userCredential) => {})
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
      <div className="absolute">
        <img
          src={LOGIN_BG_IMAGE}
          alt="login-bg"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <form className="w-full md:w-3/12 p-8 bg-black absolute my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
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
