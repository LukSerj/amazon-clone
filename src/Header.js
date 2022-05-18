import React from 'react'
import Checkout from './Checkout';
import'./Header.css'
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function header() {
  const [{ basket, user }, dispatch]= useStateValue();
const handleAuthentification = ( ) => {
  if(user) {
    auth.signOut();
  }
}


  return (
    <div className="header">
      <Link to="/">  <img className="header__logo"
        
        src="/imagini/hidromarketrosu.png"/> </Link>

      
        
        <div className="header__search">
            <input className="header__searchInput" 
            type="text"/>
            <SearchIcon className="header__searchIcon"/>
            
            </div> 

<div className="header__nav">
  <Link to={!user && '/login'}>
    
    <div onClick={handleAuthentification} className="header__option">
    <span className="header__optionLineOne" >Salut {!user ? 'Guest' :user.email}</span>
    
    <span className="header__optionLineTwo" >{user ? 'Sign Out' : 'Sign In' }</span>
    </div>
    </Link>


    <div className="header__option">
    <span className="header__optionLineOne">Comenzi</span>
    <span className="header__optionLineTwo">& Returnări</span>
    </div>
    <div className="header__option">
    <span className="header__optionLineOne">Contul</span>
    <span className="header__optionLineTwo">Tău</span>
       </div>
       <Link to="/checkout"> 
       <div className ="header__optionBasket">
         <ShoppingBasketIcon/>
         <span className="header__optionLineTwo header__basketCount">{ basket.length }</span>
         </div></Link>
      
      </div>
     </div>
  )
}

export default header