import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const Header = (props: Props) => {
  return (
    <div data-testid='header' style={{ textAlign: 'center' }}>
      <h1>{props.children}</h1>
    </div>
  )
}

export default Header
