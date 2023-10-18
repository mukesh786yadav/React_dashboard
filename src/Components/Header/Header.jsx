import React from 'react'
// import './Header.css'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          <h3>Hello Mukesh</h3>
        </div>
        <div className='header-right'>
            <input type="text" name="" id="" style={{border:"none",backgroundColor:""}} placeholder='Search..'/>
            <BsSearch  className='icon'/>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> */}
        </div>
    </header>
  )
}

export default Header