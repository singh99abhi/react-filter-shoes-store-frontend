import React from 'react'

const Button = ({onClickHandler,value,title}) => {
  console.log(onClickHandler)
  return (
     <button onClick={onClickHandler} value={value} className='btns'>{title}</button>
  )
}

export default Button