import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import {data} from "./components/data";

function App() {
 return (
  <div className="App">
     <div id="all-product">
       
    {data.map(product =>(
      <Product name={product.name} price={product.price} key={product.id} />
    ))
         
    }
       
   </div>
  </div>
 );
}

export default App;
