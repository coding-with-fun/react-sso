import React from "react";
import { useLogin } from "./hooks/useLogin";
import { useLogout } from "./hooks/useLogout";

const App = () => {
  const { login, isPending } = useLogin();
  const { logout } = useLogout();

  return (
    <div className="App">
      <button className="btn" onClick={login}>
        {isPending ? "Loading..." : "Login With Github"}
      </button>
      <button className="btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default App;
