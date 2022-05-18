import { Email } from "@mui/icons-material";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

export default function checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
<img className="checkout__ad" src="https://business.amazon.in/assets/in/14th-july/462_AB_PD_Website_Hero_2880x480_New.jpg.transform/2880x480/image.jpg"   alt=" "/>
<div>
          <h3>Salut </h3>

          <h2 className="checkout__title">Coșul tău de cumpărături</h2>

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
        <div className="checkout__right">
            <Subtotal />
            


           
            </div>
    
    
    </div>
  )
}
