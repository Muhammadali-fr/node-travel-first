import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout 
import MainLayout from './layout/MainLayout'

// pages 
import Form from './pages/Form'
// import Books from './pages/Books'
import Books from './pages/Books'
import Update from './pages/Update';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          // index: true,
          path: '/form',
          element: <Form />
        },
        {
          index: true,
          element: <Books />
        },
        {
          path: '/update/:id',
          element: <Update />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
