import React from 'react'
import PointCounterClass from '../../classes/PointCounter'
import styles from './PointCounter.module.css'

type Props = {
  pointCounter: PointCounterClass
}

function PointCounter({ pointCounter }: Props): JSX.Element {
  const finishedPoints = pointCounter.getFinishedPoints()
  const maxPoints = pointCounter.getMaxPoints()

  return (
    <div className={styles.pointCounterContainer}>
      {maxPoints > 0 && (
        <div className={styles.pointCounterWrapper}>
          <span>
            {finishedPoints} / {maxPoints} points finished
          </span>
        </div>
      )}
    </div>
  )
}

export default PointCounter
