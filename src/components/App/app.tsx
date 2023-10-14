import * as React from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Header from '../Header'
import Resume from '../Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header>justin-shepard.net</Header>
        <Link to='resume'>Resume</Link>
      </>
    )
  },
  {
    path: '/resume',
    element: <Resume />
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
