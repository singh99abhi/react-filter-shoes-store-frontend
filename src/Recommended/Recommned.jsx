import React from 'react'
import "./rec.css"
import Button from '../components/Button'

const Recommned = ({handleClick}) => {
  return (
    <>
        <div>
            <h2 className='recommended-title'>
                Recommended
            </h2>
            <div className="recommended-flex">
                <button className='btns'>All Products</button>
                <Button onClickHandler={handleClick} value="Nike" title="Nike"></Button>
                <Button onClickHandler={handleClick} value="Adidas" title="Adidas"></Button>
                <Button onClickHandler={handleClick} value="Puma" title="Puma"></Button>
                <Button onClickHandler={handleClick} value="Vans" title="Vans"></Button>
                
            </div>
        </div>
    </>
  )
}

export default Recommned