
//if you are craeting a component in react e.g. product always start with a capital letter
function Product(props) {
  return (

        <div className="product">
          <div className="product-name">{props.name}</div>
          <div className="product-price">${props.price}</div>
          <div className="buy-button">Buy</div>
        </div>
    
  )
}

export default Product;