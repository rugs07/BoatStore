import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { BsCurrencyRupee } from "react-icons/bs";
import { Context } from "../../../utils/context";
import { useContext, useEffect } from "react";
const CartItem = () => {
  const { cartItems, handlecartproductquantity, handleremovefromcart } =
    useContext(Context);
  useEffect(() => {}, [cartItems]);
  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="product-name">{item.attributes.title}</span>
            <span onClick={() => handleremovefromcart(item)}>
              <MdClose size={20} className="close-btn" />
            </span>
            <div className="quantity-buttons">
              <span onClick={() => handlecartproductquantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handlecartproductquantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                <BsCurrencyRupee />
                {item.attributes.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
