import * as React from 'react'

import styles from './resume.module.css'

interface CategoryProps {
  name: string
  words: string[]
}

const Category = ({name, words}: CategoryProps) => {
  return <p className={styles.buzzwords}><strong>{name}:</strong> {words.join(', ')}</p>
}

interface BuzzwordProps {
  buzzwords: { [category: string]: string[] }
}

const Buzzwords = ({ buzzwords }: BuzzwordProps) => {
  return (
    <div className={styles.section} data-testid='buzzwords'>
      <h2 className={styles.sectionHeader}>Buzzwords</h2>
      {Object.keys(buzzwords).map(e => <Category key={e} name={e} words={buzzwords[e]} />)}
    </div>
  )
}

export default Buzzwords
