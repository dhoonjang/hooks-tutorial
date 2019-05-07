import React from 'react';
// import Info from './Info';
import Context from './Context';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

const App = () => {
  // const [visible, setVisible] = useState(false);
  return (
    <>
      <Context/>
      <Counter/>
      <Info/>
      <Average/>
    </>
  );
};

export default App;