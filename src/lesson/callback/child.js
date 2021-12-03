import React, {useEffect} from 'react';

export default function Child({ returnName }) {
  useEffect(() => {
    console.log("return Name");
  }, [returnName]);
  console.log(returnName);

  return <div>
     <h1> {returnName()}</h1>
      </div>;
}
