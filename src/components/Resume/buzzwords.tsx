import * as React from 'react'

interface CategoryProps {
  name: string
  words: string[]
}

const Category = ({name, words}: CategoryProps) => {
  return <p><strong>{name}:</strong> {words.join(', ')}</p>
}

interface BuzzwordProps {
  buzzwords: { [category: string]: string[] }
}

const Buzzwords = ({ buzzwords }: BuzzwordProps) => {
  return (
    <div data-testid='buzzwords'>
      <h2>Buzzwords</h2>
      {Object.keys(buzzwords).map(e => <Category key={e} name={e} words={buzzwords[e]} />)}
    </div>
  )
}

export default Buzzwords