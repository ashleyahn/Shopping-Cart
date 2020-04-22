import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { Column } from 'rbx';
import Item from './Components/Item';

var firebaseConfig = {
  apiKey: "AIzaSyAhmO59ZWHYd9Du8OvmcSRbgoam4rDBj9g",
  authDomain: "shopping-cart-b046b.firebaseapp.com",
  databaseURL: "https://shopping-cart-b046b.firebaseio.com",
  projectId: "shopping-cart-b046b",
  storageBucket: "shopping-cart-b046b.appspot.com",
  messagingSenderId: "352224833111",
  appId: "1:352224833111:web:b89c19fb7de465cc41bd12",
  measurementId: "G-8QMNBVB5JC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
      const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    //<Grid items = {products}/>
    <Column.Group vcentered multiline>
      {products.map(product => 
        <Column size="one-quarter">
          <Item
            key = {product.sku}
            sku = {product.sku}
            title = {product.title}
            description = {product.description}
            price = {product.price}/>
        </Column>
      )}
    </Column.Group>
  );
};

export default App;
