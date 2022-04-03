import React, { useEffect, useState } from 'react'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {

  let { data, func, isReady } = useSelector(state => state);
  const dispatch = useDispatch()
  const executeFunc = () => {
    if (isReady) {
      if (func === "toUpperCase") {
        dispatch({type:"result", content:data.toUpperCase()})
      }
      else if (func === "wordNum") {
        dispatch({type:"result", content:data.split(' ').length})
      }
      else if (func === "reverse") {
        dispatch({type:"result", content:data.split('').reverse().join('')})
      }
    }
  }

  return (
    <header className="header">
      <button className={isReady ? 'header-execute active' : 'header-execute'} onClick={executeFunc}>
        실행하기
      </button>
    </header>
  )
}

export default Header;