import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/home'
import Users from './containers/users'
import GlobalStyle from './styles/globalStyle'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/tela-de-registro',
    element: <Home />,
  },
  {
    path: '/tela-de-registro/users',
    element: <Users />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
