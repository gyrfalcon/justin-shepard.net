// @flow strict
import * as React from 'react'

type HeaderProps = {
  children: React.Node,
}

export default function Header (props: HeaderProps) {
  return (
    <div data-id="header" style={{ textAlign: 'center' }}>
      <h1>{props.children}</h1>
    </div>
  )
}
