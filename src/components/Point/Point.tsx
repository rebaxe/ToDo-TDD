import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import EasyPoint from '../../classes/EasyPoint'
import PointClass from '../../classes/Point'
import MediumPoint from '../../classes/MediumPoint'
import HardPoint from '../../classes/HardPoint'
import styles from './Point.module.css'
import Tooltip from '../Tooltip/Tooltip'

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
        <Tooltip delay="" direction="" content="Easy 🐥">
          <span className={styles.easyPoint}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
        </Tooltip>
      )}
      {isMedium() && (
        <Tooltip delay="" direction="" content="Medium 🦆">
          <span className={styles.mediumPoint}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
        </Tooltip>
      )}
      {isHard() && (
        <Tooltip delay="" direction="" content="Hard 🦅">
          <span className={styles.hardPoint}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
        </Tooltip>
      )}
    </>
  )
}

export default Point
