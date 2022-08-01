import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { useLogin } from "./hooks/useLogin";
import ProfileCard from "./ProfileCard";

const App = () => {
  const { login } = useLogin();
  const { user, authIsReady } = useContext(AuthContext);
  console.log(user);

  return authIsReady ? (
    <div className="App">
      {user ? (
        <ProfileCard user={user} />
      ) : (
        <button className="btn login-btn" onClick={login}>
          Login With GitHub
        </button>
      )}
    </div>
  ) : (
    <h1>Making your auth ready, please wait for a moment</h1>
  );
};

export default App;
