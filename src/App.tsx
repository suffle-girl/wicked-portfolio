import { ReactNode, Suspense } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Hello World!</div>
      <div>{children}</div>
      <Outlet />
    </Suspense>
  );
};

export default App;
