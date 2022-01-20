import React from 'react'
import Lottie from 'react-lottie'
import animationData from './lottie-firework.json'

const animation = animationData

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  renderSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

function Firework() {
  return (
    <div>
      <Lottie options={defaultOptions} width={100} height={100} />
    </div>
  )
}

export default Firework
