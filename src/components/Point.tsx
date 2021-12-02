import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import EasyPoint from '../classes/EasyPoint'
import PointClass from '../classes/Point'

type Props = {
  point: PointClass
}

function Point({ point }: Props): JSX.Element {
  const isEasy = () => {
    return point instanceof EasyPoint
  }
  return (
    <>
      {isEasy() && (
        <span className="easyPoint" title="Easy">
          <FontAwesomeIcon icon={faCircle} />
        </span>
      )}
    </>
  )
}

export default Point
