import React from 'react'
import PropTypes from 'prop-types'
import Calc from './Component/Calc'

function Button (props) {
const { children, onClick } = props

  return (
    <button
      onClick={onClick}
      >
      {children}
    </button>
  )
}

Button.PropTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button