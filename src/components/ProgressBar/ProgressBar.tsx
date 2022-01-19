import React from 'react'
import styles from './ProgressBar.module.css'

type Props = {
  completed: number
  fillColor: string
  outlineColor: string
  label: string
  labelColor: string
}

function ProgressBar({
  completed,
  fillColor,
  outlineColor,
  label,
  labelColor
}: Props): JSX.Element {
  const barWrapper = {
    height: '20px',
    width: '100%',
    backgroundColor: '#fff9f2',
    borderRadius: '50px',
    outline: `1px solid ${outlineColor}`
  }

  const barFiller = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: fillColor,
    borderRadius: 'inherit',
    transition: 'width 1s ease-in-out'
  }

  const labelStyles = {
    color: labelColor,
    display: 'table',
    margin: '0 auto'
  }

  return (
    <div className={styles.barContainer}>
      <div style={barWrapper}>
        <div style={barFiller} />
      </div>
      <span style={labelStyles}>{label}%</span>
    </div>
  )
}

export default ProgressBar
