import React from 'react'

const ProductMenu = ({children, className}) => {
  return (
    <div className={`group w-full py-3 px-5 xl:py-4 font-bold  rounded-2xl flex justify-between ${className}`}>{children}</div>
  )
}

export default ProductMenu;