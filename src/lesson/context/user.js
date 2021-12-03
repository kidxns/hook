import React, { useContext } from "react";
import { AppContext } from "./index";

export default function User() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}
