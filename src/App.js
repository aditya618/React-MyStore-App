import React from 'react';
import './style.css';
import Header from './header';
import ProductLists from './productLists';
import ProductDetail from './productDetail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      setProducts(res.data);
    });
  }, []);

  const getSelectedProduct = product => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/product">
            <ProductDetail product={selectedProduct} />
          </Route>
          <Route path="/">
            <ProductLists
              products={products}
              selectedProduct={getSelectedProduct}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
