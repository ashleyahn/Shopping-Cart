import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

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

  return (
    <ul>
      {products.map(product => <li key={product.sku}>{product.title}</li>)}
    </ul>
  );
};

export default App;
