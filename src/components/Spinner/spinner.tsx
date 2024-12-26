import * as React from 'react'

import * as styles from './spinner.module.css'

const Spinner = () => {
  return (
    <div data-testid='spinner' className={styles.spinner}></div>
  )
}

export default Spinner
