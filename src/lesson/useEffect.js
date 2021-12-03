import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Effect() {
  const [state, setState] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
        setState(res.data[0].title);
        console.log('Called');
    });
  },[]); //USE EFFECT WILL BE CALL 2 TIMES, BEFORE DOM RENDER AND AFTER DOM RENDER
  //SO FIX IT : []
  return (
    <div>
      <h1>Effect</h1>
      <h3>{state}</h3>
    </div>
  );
}
