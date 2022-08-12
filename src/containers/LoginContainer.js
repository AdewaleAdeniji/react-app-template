import React from "react";

const LoginContainer = ({ children }) => {
  return (
    <>
      <div className="login-container flex">
        {children}
      </div>
    </>
  );
};
export default LoginContainer;
