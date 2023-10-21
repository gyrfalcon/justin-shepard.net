interface PlainToken {
  type: 'plain'
  value: string
}

interface EmphasisToken {
  type: 'emphasis'
  value: string
}

interface StrongToken {
  type: 'strong'
  value: string | EmphasisToken
}

export type Token =
  | PlainToken
  | EmphasisToken
  | StrongToken

export const parse = (text: string): Token[] => {
  let curToken: Token | undefined
  const tokens: Token[] = []
  for (let i = 0; i < text.length; i++) {
    const curChar = text[i]
    if (curChar === '*') {
      if (curToken?.value && curToken.type === 'plain') {
        tokens.push(curToken)
        curToken = undefined
      }
      if (text[i + 2] === '*') {
        if (curToken?.type === 'emphasis') {
          curToken = undefined
        } else {
          curToken = { type: 'emphasis', value: '' }
          tokens.push({ type: 'strong', value: curToken })
        }
        i += 2
      }
      else if (text[i + 1] === '*') {
        if (curToken?.type === 'strong') {
          tokens.push(curToken)
          curToken = undefined
        } else {
          curToken = { type: 'strong', value: '' }
        }
        i++
      } else {
        if (curToken?.type === 'emphasis') {
          tokens.push(curToken)
          curToken = undefined
        } else {
          curToken = { type: 'emphasis', value: '' }
        }
      }
      continue
    }

    if (!curToken) {
      curToken = { type: 'plain', value: '' }
    }

    curToken.value += curChar
  }

  if (curToken) {
    tokens.push(curToken)
  }

  return tokens
}