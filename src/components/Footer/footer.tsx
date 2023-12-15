import * as React from 'react'

import styles from './footer.module.css'

interface Props {
  children: React.ReactNode
}

const Footer = (props: Props) => {
  return (
    <div data-testid='footer' className={styles.footer}>
      {props.children}
    </div>
  )
}

export default Footer
