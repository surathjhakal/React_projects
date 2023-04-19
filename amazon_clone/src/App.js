import { useEffect, useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import "./productsData";
import "./App.css";
import Cart from "./Cart";
import db from "./firebase";
import Header from "./Header";
import Home from "./Home";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    db.collection("cart-items").onSnapshot((snapshot) => {
      let tempCartItems = [];
      snapshot.docs.map((doc) => {
        tempCartItems.push({
          id: doc.id,
          cartItem: doc.data(),
        });
      });
      setCartItems(tempCartItems);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header cartItems={cartItems} />
        <Switch>
          <Route exact path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
