import React, { useEffect, useState } from 'react'
import PointCounterClass from '../../classes/PointCounter'
import ProgressBar from '../ProgressBar/ProgressBar'
import styles from './PointCounter.module.css'

type Props = {
  pointCounter: PointCounterClass
}

function PointCounter({ pointCounter }: Props): JSX.Element {
  const finishedPoints = pointCounter.getFinishedPoints()
  const maxPoints = pointCounter.getMaxPoints()
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const percent = Math.round((finishedPoints / maxPoints) * 100)
    setPercentage(percent)
  }, [finishedPoints, maxPoints])

  return (
    <div className={styles.pointCounterContainer}>
      {maxPoints > 0 && (
        <div className={`pointCounterWrapper ${styles.pointCounterWrapper}`}>
          <ProgressBar
            completed={percentage}
            fillColor="#e76f51"
            outlineColor=""
            label={percentage.toString()}
            labelColor="#fff9f2"
          />
        </div>
      )}
    </div>
  )
}

export default PointCounter
