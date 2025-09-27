import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import SwitcherView from '../modules/home/view/switcherView';

import SwitcherViewCompania  from '../modules/compania/view/switcherView';
import SwitcherViewService from '../modules/services/view/switcherView';
import SwitcherViewPolitica from '../modules/politica/view/switcherView';
import SwitcherViewCustomerService from '../modules/customService/view/switcherView';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SwitcherView />
      },
      
      {
        path: "/nuestra-compania",
        element: <SwitcherViewCompania />
      },
      {
        path: "/productos-servicios",
        element: <SwitcherViewService />
      },
      {
        path: "/politicas",
        element: <SwitcherViewPolitica />
      },
      {
        path: "/servicio-cliente",
        element: <SwitcherViewCustomerService />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
