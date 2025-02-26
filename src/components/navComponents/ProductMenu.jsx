import React from 'react'

const ProductMenu = ({productKey, children, className}) => {
  return (
    <div key={productKey} className={`group w-full py-3 px-5 xl:py-4 font-bold  rounded-2xl flex justify-between ${className}`}>{children}</div>
  )
}

export default ProductMenu;