import React, { useEffect, useState } from 'react'
import PointCounterClass from '../../classes/PointCounter'
import Firework from '../Firework/Firework'
import Modal from '../Modal/Modal'
import ProgressBar from '../ProgressBar/ProgressBar'
import styles from './PointCounter.module.css'

type Props = {
  pointCounter: PointCounterClass
}

function PointCounter({ pointCounter }: Props): JSX.Element {
  const finishedPoints = pointCounter.getFinishedPoints()
  const maxPoints = pointCounter.getMaxPoints()
  const [percentage, setPercentage] = useState(0)
  // const [hasCelebrated, setHasCelebrated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseModal = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const percent = Math.round((finishedPoints / maxPoints) * 100)
    setPercentage(percent)
  }, [finishedPoints, maxPoints])

  useEffect(() => {
    if (percentage === 100) {
      // setHasCelebrated(true)
      handleCloseModal()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage])

  // useEffect(() => {
  //   setHasCelebrated(false)
  // }, [maxPoints])

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
      {isOpen && (
        <Modal handleCloseModal={handleCloseModal}>
          <h1>Hooray!</h1>
          <p>You finished all your tasks. Well done!</p>
          <Firework />
        </Modal>
      )}
    </div>
  )
}

export default PointCounter
