import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import PlaceToStayScreen from './PlaceToStayScreen'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "placetostay",
    element: <PlaceToStayScreen/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
