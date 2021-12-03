import React, { useState, forwardRef, useImperativeHandle } from "react";
const ChildForwardRef = forwardRef((prop, ref) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  useImperativeHandle(ref, () => ({
    handleToggle
  }));

  return (
    <div>
      <h1>{toggle ? "Hello" : null}</h1>
      <button onClick={handleToggle}>Click child</button>
    </div>
  );
});

export default ChildForwardRef;
