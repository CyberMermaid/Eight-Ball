import React from 'react';
import { Eightball } from './EightBall.js';

const App = () => {
  return (
    <div>
      <Eightball/>
    </div>
  );
}


export default App;

ReactDOM.render(<App/>, document.getElementById("root"))