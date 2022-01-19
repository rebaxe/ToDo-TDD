import React, { useState } from 'react'
import styles from './Tooltip.module.css'

type Props = {
  delay: any
  children: any
  direction: string
  content: string
}

function Tooltip({ delay, children, direction, content }: Props): JSX.Element {
  let timeout: any
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay || 200)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <div className={styles.tooltipWrapper} onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <div className={`${styles.tooltipTip} ${styles.left}`}>{content}</div>}
    </div>
  )
}

export default Tooltip
