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
      <span>
        {finishedPoints} / {maxPoints}
      </span>
    </>
  )
}

export default PointCounter
