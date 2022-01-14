import React from 'react'
import PointCounterClass from '../classes/PointCounter'

type Props = {
  pointCounter: PointCounterClass
}

function PointCounter({ pointCounter }: Props): JSX.Element {
  const finishedPoints = pointCounter.getFinishedPoints()
  const maxPoints = pointCounter.getMaxPoints()

  return (
    <>
      {maxPoints > 0 && (
        <div className="pointcounter-wrapper">
          <span>
            {finishedPoints} / {maxPoints} points finished
          </span>
        </div>
      )}
    </>
  )
}

export default PointCounter
