import {useState} from "react";

//if you are craeting a component in react e.g. product always start with a capital letter
function Product(props) {
 const [status, setStatus] = useState(false);
 //status = false

 const buy_product = () => {
   console.log("you are buying", props.name);
   setStatus(!status)
   props.cart_function(props.id)
 };
 return (
   <div className="product">
     
   <div className="product-name">{props.name}
   </div>
   <div className="product-price">${props.price}</div>
   <div className="buy-button" onClick={buy_product}>
      {status === true ? "Bought" : "Buy"}
    </div>
     
  </div>
 );
}

export default Product;
