import {useState, useEffect} from "react";

function Cart(props) {
 const [qty, setQty] = useState(0);

 useEffect(() => {
  setQty(props.qty)
 }, []);

 const manageQty = option => {
  let new_qty = qty
  if (option === "add") {
   new_qty++
  } else {
   new_qty--
  }
  setQty(new_qty)
 }

    const removeCart = () => {
        props.remove_function(props.id)
    }
    
 return (
  <div class="cart-product">
   <p>{props.name}( ${props.price})</p>
<div class="product-btn">
             
    <div class="btn"onClick={() => {manageQty("sub");}}>-</div>
    <div class="qty">{qty}</div>
    <div class="btn" onClick={() => { manageQty("add"); }}>+</div>
             
</div>
         
   <div class="removeBtn">Remove</div>
  </div>
 )
}
export default Cart;
