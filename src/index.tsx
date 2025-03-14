import { createRoot } from 'react-dom/client';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.less';
import { Suspense } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage/index.tsx';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/tasks',
        element: <HomePage />,
      },
      {
        path: '/profile',
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
