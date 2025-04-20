// App.js importing components
import React from 'react';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "our vip client"; 

  return (
    <div className="app-container">
      <div className="product-card">
        <Image />
        <div className="product-details">
          <Name />
          <Price />
          <Description />
          <button className="shop-button">Shop Now</button>
        </div>
      </div>

      <div className="welcoming">
        {firstName ? (
          <div>
            <p>Hello, {firstName} Welcome to shopping! !</p>

          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default App;
