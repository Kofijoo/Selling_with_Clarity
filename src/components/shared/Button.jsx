import React from 'react'

function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  className = ''
}) {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = `btn-${size}`
  const disabledClass = disabled ? 'btn-disabled' : ''
  
  const classes = [baseClass, variantClass, sizeClass, disabledClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button 
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button