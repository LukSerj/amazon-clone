import React from 'react';
import"./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Subtotal() {
  const history = useHistory ();
  const [{ basket }, dispatch]= useStateValue();
  return (
    <div className="subtotal">
        <CurrencyFormat 
        renderText={value =>(
        <>
        <p>
            Subtotal ( {basket.length} produse ):
            <strong>{value}</strong> </p> 
            <small className="subtotal__gift">
                <input type="checkbox"/> This order contains a gift </small>
                </>
        ) }
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"RON "} />
        <button onClick={e => history.push('/payment')}>Continuare spre pasul următor</button>

            


    </div>
  )
}

export default Subtotal