import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lottie-firework.json'

const animation = animationData

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animation,
  renderSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function Firework() {
  return (
    <div>
      <Lottie options={defaultOptions} width={50} height={50} />
    </div>
  )
}

export default Firework
