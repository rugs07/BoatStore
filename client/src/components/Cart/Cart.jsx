import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js";

import {makepaymentrequest} from "../../utils/api"
const Cart = ({ setShowCart }) => {
  const { cartItems, cartsubtotal } = useContext(Context);
  const stripepromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  const handlepayment = async () => {

    try {
      const stripe = await stripepromise;
    const res =await makepaymentrequest.post("/api/orders",{
      products : cartItems,
    });

    await stripe.redirectToCheckout({
      sessionId:res.data.stripeSession.id
    });
      
    } catch (error) {
      console.log(error);
    }
   
  };
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="close">Close</span>
          </span>
        </div>
      {!cartItems?.length && <div className="empty-cart">
        <BsCartX />
        <span>Cart is Empty</span>
        <button className="return-cta">RETURN TO SHOP </button>
      </div>}

        {cartItems?.length && <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">SubTotal:</span>
              <span className="total">
                <BsCurrencyRupee /> {cartsubtotal}
              </span>
            </div>
            <div className="button">
              <button className="checkout-cta" onClick={handlepayment}>CheckOut</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Cart;
