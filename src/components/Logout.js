import React from "react";
import "../css/DropDown.css";
import { useHistory } from "react-router-dom";
import authApi from "../api/authApi";

const Logout = ({ display, token }) => {
  const history = useHistory();
  const handleLogOut = async () => {
    const params = {
      token: token,
    };
    try {
      await authApi.logout(params);
      localStorage.removeItem("tokenPackage");
      history.push("/");
    } catch (err) {
      throw err;
    }
  };
  return display ? (
    <div className="dropDown">
      <span onClick={handleLogOut}>Logout</span>
    </div>
  ) : (
    <div className="dropDown hidden">
      <span onClick={handleLogOut}>Logout</span>
    </div>
  );
};

export default Logout;
