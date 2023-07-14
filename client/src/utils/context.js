import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [cartsubtotal, setCartSubtotal] = useState(0);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item.attributes.quantity));
    setcartCount(count);
    let subtotal = 0;
    cartItems.map(
      (item) => (subtotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubtotal(subtotal);
  }, [cartItems]);

  const handleaddtocart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }

    setCartItems(items);
  };
  const handleremovefromcart = (product) => {
    let items = [...cartItems];
    const newItems = items.filter((p) => p.id !== product.id);
    console.log("new", newItems);
    setCartItems(newItems);
  };
  const handlecartproductquantity = (type, product) => {
    const items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setcartCount,
        cartsubtotal,
        setCartSubtotal,
        handleaddtocart,
        handleremovefromcart,
        handlecartproductquantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
