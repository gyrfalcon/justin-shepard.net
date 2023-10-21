import * as React from 'react'
import { type Token, parse } from './markdown.helpers'
import { hash } from '../../helpers/string.helpers'

interface Props {
  children: string
}

const toReact = (token: Token) => {
  switch (token.type) {
    case 'emphasis':
      return <em key={hash(token.type + token.value)}>{token.value}</em>
    case 'strong':
      if (typeof token.value === 'string') {
        return <strong key={hash(token.type + token.value)}>{token.value}</strong>
      } else {
        return <strong>{toReact(token.value)}</strong>
      }
    case 'plain':
      return token.value
  }
}

const Markdown = ({ children }: Props) => {
  const tokens = parse(children)

  return <>{tokens.map(toReact)}</>
}

export default Markdown
