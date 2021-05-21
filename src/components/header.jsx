// @flow strict
import * as React from 'react'

type HeaderProps = {
  children: React.Node,
}

const Header = (props: HeaderProps): React.Node => {
  return (
    <div data-id="header" style={{ textAlign: 'center' }}>
      <h1>{props.children}</h1>
    </div>
  )
}

export default Header
