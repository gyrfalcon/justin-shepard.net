import React, { Suspense } from 'react'
import { Link, RouterProvider, createBrowserRouter } from 'react-router'

import Header from '../Header'
import Footer from '../Footer'
import Spinner from '../Spinner'

const Resume = React.lazy(() => import('../Resume'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header>justin-shepard.net</Header>
        <Link to='resume'>Resume</Link>
      </>
    ),
  },
  {
    path: '/resume',
    element: <Suspense fallback={<Spinner />}>
      <Resume />
    </Suspense>,
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer>
        <a
          href='https://github.com/gyrfalcon/justin-shepard.net'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
      </Footer>
    </>
  )
}

export default App
