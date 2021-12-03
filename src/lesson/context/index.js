import React, {createContext, useState} from 'react';
import User from './user';
import Login from './login';

export const AppContext = createContext(null);

function Context() {
    const [username, setUsername] = useState(null);
  return (
    <AppContext.Provider value={{ username, setUsername}}>
      <User/>
      <Login/>
    </AppContext.Provider>
  );
}

export default Context;
