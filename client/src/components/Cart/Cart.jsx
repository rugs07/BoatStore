import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { BsCurrencyRupee } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartsubtotal } = useContext(Context);
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
              <button className="checkout-cta">CheckOut</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Cart;
