import { useState } from 'react';
import './App.css';
import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="content">
      <h1>Rsbuild with React -- Remote</h1>
      <Button />
      <div style={{marginBlock: '1rem'}}>
        <button onClick={() => setCount((pre) => pre + 1)}>count is: {count}</button>
      </div>
    </div>
  );
};

export default App;
