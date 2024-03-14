import React from 'react'
import "./Productes.css"
import Errorbox from '../Errorbox/Errorbox'
import AddProduct from '../Addproduct/AddProduct'

function Productes() {
  return (
    <>
      <Errorbox msg="محصولی یافت نشد" />
      <AddProduct/>
    </>
  )
}

export default Productes