import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import EasyPoint from '../classes/EasyPoint'
import PointClass from '../classes/Point'
import MediumPoint from '../classes/MediumPoint'
import HardPoint from '../classes/HardPoint'

type Props = {
  point: PointClass
}

function Point({ point }: Props): JSX.Element {
  const isEasy = () => {
    return point instanceof EasyPoint
  }
  const isMedium = () => {
    return point instanceof MediumPoint
  }
  const isHard = () => {
    return point instanceof HardPoint
  }
  return (
    <>
      {isEasy() && (
        <span className="easyPoint" title="Easy">
          <FontAwesomeIcon icon={faCircle} />
        </span>
      )}
      {isMedium() && (
        <span className="mediumPoint" title="Medium">
          <FontAwesomeIcon icon={faCircle} />
        </span>
      )}
      {isHard() && (
        <span className="hardPoint" title="Hard">
          <FontAwesomeIcon icon={faCircle} />
        </span>
      )}
    </>
  )
}

export default Point
