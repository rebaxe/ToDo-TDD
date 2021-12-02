import React from 'react'
import PointCounterClass from '../classes/PointCounter'

type Props = {
  pointCounter: PointCounterClass
}

function PointCounter({ pointCounter }: Props): JSX.Element {
  const finishedPointsAsNumber = pointCounter.getFinishedPoints()
  const maxPointsAsNumber = pointCounter.getMaxPoints()
  return (
    <>
      <span>
        {finishedPointsAsNumber} / {maxPointsAsNumber}
      </span>
    </>
  )
}

export default PointCounter
