
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
}
getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
     setSucceeded(true);
     setError(null)
     setProcessing(false)
     
     history.replace('/orders')
})
    }


    const handleChange = event => {
setDisabled(event.empty);
setError(event.error ? event.error.message : "");
    }


  return (
    <div className='payment'>
        <div className='payment__container'>
<h1>
Checkout ( <Link to ="/checkout">{basket.length} produse</Link>)

</h1>

{/* payment section- delievery address */}
<div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Adresa de livrare</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{/*{user.email*/}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Revizuiește coșul și adresa de livrare</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>


{/* payment section- payment method */}
        <div className = 'payment __section'>
                <div className='payment__title'>
                        <h3>Metodă de plată</h3>
                </div>
        <div className='payment__details'>
        {/*stripe magic */}
<form onSubmit={handleSubmit}>

<CardElement onChange={handleChange}/>
<div className= 'payment__priceContainer'>
<CurrencyFormat
renderText={(value) => (
<h3>Valoarea totală a produselor: {value}</h3>
)}
decimalScale={2}
value={getBasketTotal(basket)}
displayType={"text"}
thousandSeparator={true}
prefix={"RON   "} />
<button disabled={processing || disabled || succeeded} >
<span>{processing ? <p>În curs de procesare</p> : "Buy Now"}</span>

</button>
</div>
{error && <div>{error}</div>}
</form>


        </div>
        
        </div>
</div>
</div>
  )
}

export default Payment