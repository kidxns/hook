import React, { useContext } from "react";
import { AppContext } from "./index";

export default function Login() {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
}
