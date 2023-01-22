import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Experience from './pages/Experience';
import Certification from './pages/Certification';
import PublicSpeaking from './pages/PublicSpeaking';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "experience",
        element: <Experience />
      },
      {
        path: "certification",
        element: <Certification />
      },
      {
        path: "public-speaking",
        element: <PublicSpeaking />
      },
      {
        path: "blog",
        element: <Blog />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
