import React from 'react'

const DropdownContainer = ({children}) => {
  return (
    <div className="relative hidden lg:flex w-full mx-auto">{children}</div>
  )
}

export default DropdownContainer