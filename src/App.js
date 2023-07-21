import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import { data } from "./components/data";
import Cart from "./components/cart";
import{useState} from 'react'


function App() {
  const [cartItems, setCartItems] = useState([
  //  {name: "First Name", qty: 10, price: 60},
  //  {name: "Second Name", qty: 15, price: 200}
  ]);

  const addToCart = id => {
    const currentProduct = data.find(e => {
      return e.id == id
    })
    const allItems = [...cartItems]
    allItems.push({name: currentProduct.name, qrty: 1, price:currentProduct.price })
    setCartItems(allItems)
  }
  
  return <div className="App">
   
   <div id="all-product">
    {data.map(product =>
     <Product
      name={product.name}
      price={product.price}
      key={product.id}
      cart_function={addToCart}
      id = {product.id}
     />
    )}
   </div>

   <div id="sideBar">
    {cartItems.map(cart => <Cart name={cart.name} qty={cart.qty} />)}
   </div>
  </div>;
}




export default App;
