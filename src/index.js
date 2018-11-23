// @flow
import * as React from 'react'
import { render } from 'react-dom'
import App from './app.jsx'

const rootElement = document.getElementById('root')

if (rootElement) {
  render(<App />, rootElement)
}
