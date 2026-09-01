import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Books from "./pages/Books"
import { books } from "./data"
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} /> {/*'path=' is how you create a page path*/}
        <Route path="/books" exact render={() => <Books books={books}/>} /> {/*render and the arrow function allows you to pass in props*/}
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;