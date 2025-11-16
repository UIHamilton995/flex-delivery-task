import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout'; // Import your new Layout


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the parent element for routes
    children: [
      // These children will be rendered in the <Outlet />
      
      // ...other routes
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;