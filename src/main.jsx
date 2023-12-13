import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Beers from './pages/Beers/Beers';
import BeerDetails from './pages/Beers/BeerDetails';
import Layout from './layout/layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Beers />,
      },
      {
        path: 'details/:id',
        element: <BeerDetails />,
        loader: ({ params }) => fetch(`https://api.punkapi.com/v2/beers/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
