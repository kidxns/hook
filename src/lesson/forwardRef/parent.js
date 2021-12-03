import React, {useRef} from 'react';
import ChildForwardRef from './child'


const ForwardRef = () => {
    const btnRef = useRef(null);
    console.log(btnRef);
    return(
        <div>
            <ChildForwardRef ref={btnRef}/>
            <button onClick={() => {
                btnRef.current.handleToggle()
            }}>Click Parent</button>
        </div>
    )
};

export default ForwardRef;