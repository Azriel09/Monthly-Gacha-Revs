import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const cookies = new Cookies();
  const token = cookies.get("TOKEN");

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>Login Successful!</h1>

      {<Navigate to="/admin" />}
    </div>
  );
}
