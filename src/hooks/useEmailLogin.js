import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebaseConfig";

export const useEmailLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const signUp = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;
      dispatch({
        type: "LOGIN",
        payload: user,
      });
      console.log(user);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;
      dispatch({
        type: "LOGIN",
        payload: user,
      });
      console.log(user);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return {
    signUp,
    signIn,
    error,
    isPending,
  };
};
