import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebaseConfig";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const login = async (authMethod = "GitHub") => {
    const provider =
      authMethod === "Google"
        ? new GoogleAuthProvider()
        : new GithubAuthProvider();
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;
      dispatch({
        type: "LOGIN",
        payload: user,
      });
      console.log(user);
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
