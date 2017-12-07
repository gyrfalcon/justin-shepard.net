// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.render(<App />, rootElement)
}
