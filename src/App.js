import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Books from "./pages/Books"
import { books } from "./data"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  function addToCart() {
    setCart([...cart, {...books, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart((cart.map(item => {
      if (+item.id === +book.id) {
        return {...item, quantity: +quantity}
      }
      else {
        return item
      }
    })))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })

    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numOfTimes={numOfItems()}/>
        <Route path="/" exact component={Home} /> {/*'path=' is how you create a page path*/}
        <Route path="/books" exact render={() => <Books books={books}/>} /> {/*render and the arrow function allows you to pass in props*/}
        <Route path="/books/:id" render={() => <BookInfo books={books} cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} /> {/*render and the arrow function allows you to pass in props*/}
        <Footer />
      </div>
    </Router>
  );
}

export default App;