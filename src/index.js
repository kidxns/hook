import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Reducer from './lesson/reducer';
// import Effect from './lesson/useEffect';
// import Ref from './lesson/useRef';
// import EffectLayout from './lesson/useEffectLayouts';
// import ForwardRef from './lesson/forwardRef/parent';
// import Context from './lesson/context';
// import Memo from './lesson/memo';
 import Callback from './lesson/callback';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Reducer /> */}
    {/* <Effect /> */}
    {/* <Ref/> */}
    {/* <EffectLayout/> */}
    {/* <ForwardRef/> */}
    {/* <Context />  */}
    {/* <Memo/> */}
    <Callback/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
