import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const Contexts = (props) => {
  const [auth, setAuth] = useState(undefined);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
