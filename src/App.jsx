import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {

  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">

      {showProductList ? (

        <ProductList />

      ) : (

        <div className="landing-page">

          <h1>Welcome to Paradise Nursery</h1>

          <button
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>

        </div>

      )}

    </div>
  );
}

export default App;
