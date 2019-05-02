import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('skyblue');
const Context = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: '300px',
    height: '30px',
    background: theme,
    borderRadius: '10px'
  };
  return <div style={style} />;
};

export default Context;