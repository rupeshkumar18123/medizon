import React, { useEffect } from 'react'
import Cookies from 'universal-cookie';
import { useState } from 'react'
import "./Cart.css"

function Cart() {
  const [cost, setPrice] = useState(0);
  const [cartItems, setCartIteams] = useState([]);
  const [qtyMap, setQtyMap] = useState(new Map());
  const [productMap, setProductMap] = useState(new Map());

  useEffect(() => {
    const cookies = new Cookies();
    const existingProductInCart = cookies.get('cart_product');
    if (Array.isArray(existingProductInCart)) {
      setCartIteams(existingProductInCart);
    } else {
      setCartIteams([]);
    }
  }, []);
  

  useEffect(() => {
    var x = new Map();
    var y = new Map();
    for (var i = 0; i < cartItems.length; i++) {
      var product = cartItems[i];
      var productQty = x.get(product.medicine_name);
      if (productQty == null) {
        x.set(product.medicine_name, 1);
        y.set(product.medicine_name, product);
      }
      else {
        x.set(product.title, productQty + 1)
      }
    }
    setQtyMap(x);
    setProductMap(y);
    var sum = 0;
    
    for (var j = 0; j < cartItems.length; j++) {
      sum += cartItems[j].cost;
    }
    setPrice(sum);
  }, [cartItems]);

  function productDelete(productTitle) {
    let newProductArry = [];
    for (var i = 0; i < cartItems.length; i++) {
      if (productTitle != cartItems[i].medicine_name) {
        newProductArry.push(cartItems[i]);
      }
    }
    setCartIteams(newProductArry);
    let cookies = new Cookies();
    cookies.set('cart_product', newProductArry);
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-7'>
          {Array.from(productMap.entries()).map((entry, index) => {
            let [productTitle, data] = entry;
            return (
              <div className='card' key={index}>
                <div className='card-body'>
                <img src={data.photo_url} alt="loading image..." className="image_url" />
                  <h3>{data.medicine_name}</h3>
                  <h4>Quantity :{qtyMap.get(data.medicine_name)}</h4>
                  <h5> price : {data.cost} * {qtyMap.get(data.medicine_name)} = {data.cost * qtyMap.get(data.medicine_name)}</h5>
                  <button type="button" className="btn btn-danger" onClick={() => productDelete(data.medicine_name)}>Delete</button>
                </div>
              </div>
            )
          })}
        </div>
          <div className='col-4'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {Array.from(productMap.entries()).map((entry) => {
                  let [productTitle, data] = entry;
                  return (
                    <tr>
                    <td>{data.medicine_name}</td>
                    <td>{data.cost}</td>
                    <td>{qtyMap.get(data.medicine_name)}</td>
                  </tr>
            )
                })
                }
                <tr>
                  <th scope="col">Total price</th>
                  <th scope="col">{cost}</th>
                  <th scope="col"></th>
                </tr>
              </tbody>
            </table>
          </div>
      </div>

    </div>
  )
}

export default Cart
