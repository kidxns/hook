import React, { useState, useMemo } from "react";

export default function Memo() {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState('');

  const toggleHanle = () => {
    setToggle(!toggle);
  };

  const nameHanle = () => {
      const arr = ['James', 'Tony', 'Keny', 'Windy', 'Kiwi'];
      setName(arr[Math.floor(Math.random()*arr.length)]);
      console.log(name);
  }

  const checkName = (name) => {

    console.log('render checkName');
      if(name.length > 4)
      {
          return name;
      }
      else{
          return 'Invaid'
      }

  }

  const resultCheckName = useMemo(() => checkName(name), [name]);

  return (
    <div>
      <h1>{toggle && "Toggle"}</h1>
      <h1>Name: {resultCheckName}</h1>
      <button onClick={toggleHanle}>Toggle</button>
      <button onClick={nameHanle}>Set Name</button>
    </div>
  );
}

//Actually improve performance
//Avoid rerendering manytime
