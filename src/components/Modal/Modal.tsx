import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import styles from './Modal.module.css'

type Props = {
  children: any
  handleCloseModal: any
}

function Modal({ children, handleCloseModal }: Props): JSX.Element {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalWrapper}>
        <motion.button
          whileHover={{ backgroundColor: '#2828281c' }}
          whileTap={{ scale: 0.9 }}
          className={styles.closeBtn}
          type="button"
          onClick={handleCloseModal}
        >
          <FontAwesomeIcon icon={faTimes} />
        </motion.button>
        {children}
      </div>
    </div>
  )
}

export default Modal
