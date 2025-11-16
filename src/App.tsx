import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout'; // Import your new Layout
import MarketplacePage from './pages/marketplace/Marketplace';
import DeliveryDetailsPage from './pages/deliveryDetails/DeliveryDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the parent element for routes
    children: [
      // These children will be rendered in the <Outlet />
      {
        path: '/', // <-- 2. ADD THE ROUTE
        element: <MarketplacePage />,
      },
      {
        path: '/deliveryDetails', // <-- 2. ADD THE ROUTE
        element: <DeliveryDetailsPage />,
      },
      // ...other routes
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;