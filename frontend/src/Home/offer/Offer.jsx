

import "./offer.css";
import data from "../Mdecine_Data.json";
import SearchBar from "../../navbar/SearchBar";
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
function Offer() {


  const x = useNavigate();
  let cookies = new Cookies();
  function Handle(index) {
    const product = data[index];
    if (window.confirm("Do you want to add this product to cart ?")) {
      let existingProductInCart = cookies.get('cart_product');
      if (existingProductInCart == null || existingProductInCart == undefined) {
        cookies.set('cart_product', [product])
      }
      else {
        cookies.set('cart_product', [...existingProductInCart, product]);
      }
      x("../cart");
    }
    else{
      alert("Product is not added to cart")
    }
  }

  return (
    <> <SearchBar/>
    
    <div className="container-fluid">
   
      <div className="container i2">
      <h3 className="text1">Special offer only for you....!!!!</h3>
        <div className="row flex-l2">
          {data.map((row, index) => {
            return (
              <div className="col-3 " key={index}>
                <div className="card">
                  <div className="card2 flex-l">
                  <img src={row.photo_url} alt="loading image..." className="image_url" />
                    <p style={{ textAlign: "center" }}>{row.medicine_name}</p>
                    <h3 style={{ textAlign: "center" }}>$ {row.cost}</h3>
                    <input
                      type="button"
                      className="btn btn-warning"
                      value="Add to Cart"
                      onClick={() => Handle(index)}
                    />
                  </div>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
export default Offer;
