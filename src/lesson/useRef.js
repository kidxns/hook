import React, {useRef} from 'react'

export default function Ref() {
    const inputRef = useRef(null); // FIND ELEMENT IN REACT DOM
    console.log('input', inputRef);
  return (
    <div>
      <h1>Nam day</h1>
      <input type='text' ref={inputRef} className='king' /> 
    </div>
  );
}
