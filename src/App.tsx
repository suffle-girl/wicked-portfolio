import { Suspense } from 'react';
import './App.css';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Hello World!</div>
    </Suspense>
  );
};

export default App;
