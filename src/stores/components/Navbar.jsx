import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContent'

 const Navbar =()=>
 {

  const {cartItems }= useCart()

  return(
    <>
    <div className="navSection" sandbox="allow-same-origin">
        <div className="title">
            <h2>Mega Mart</h2>

        </div>
        <div className="Search">
           <input type="text" placeholder='search.....' /> 
        </div>
        <div className="user">
            <div className="user-detail">
                SignIN/SignUP
            </div>
            <Link to='/cart'>
            <div className="cart">
                Cart
                <span>
            {cartItems.length}
          </span>
            </div>
            </Link>
        </div>
    </div>
    <div className="submenu">
        <ul>
            <Link to='/Mobiles'>
              <li>Mobiles</li>
            </Link>
            <Link to='/Computers'>
              <li>Computers</li>
            </Link>
            <Link to='/watches'>
              <li>Watches</li>
            </Link>
            <Link to='/Men Fashion'><li>Men Fashion</li></Link>
            <Link to='/Women Dressing'> <li>Women Dressing</li></Link>
            <Link to='/Furniture'> <li>Furniture</li></Link>
            <Link to='/AC'><li>Ac</li></Link>
            <Link to='/Kitchen'>
            <li>Kitchen</li>
            </Link>
        </ul>
    </div>
    </>
  )
 }
 export default Navbar                

