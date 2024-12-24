import * as React from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router'

import Header from '../Header'
import Resume from '../Resume'
import Footer from '../Footer'

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
  return (
    <>
      <RouterProvider router={router} />
      <Footer>
        <a href="https://github.com/gyrfalcon/justin-shepard.net" target="_blank" rel="noreferrer">GitHub</a>
      </Footer>
    </>
  )
}

export default App
