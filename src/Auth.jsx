import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

  useEffect(() => {
    const configuration = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch("http://localhost:8000/auth-endpoint", configuration)
      .then((result) => {})
      .catch((error) => {
        error = new Error();
        console.log(error);
      });
  }, []);

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Successful!</h1>

      {<Navigate to="/admin" />}
    </div>
  );
}
