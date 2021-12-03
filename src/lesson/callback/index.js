import React , {useState, useCallback} from 'react';
import Child from './child';

export default function Callback()
{
    const [data, setData] = useState('Please sub to my channel');
    const [toggle, setToggle] = useState(true);

    const toggleHanle = () => {
        setToggle(!toggle);
    }

    const returnName = useCallback((name) => {
       return  data + name;
    },[data]);

    return (
        <div>
            <Child returnName={returnName}/>
            <h1>{toggle && 'Callback'}</h1>
            <button onClick={toggleHanle}>Click </button>
        </div>
    )
}