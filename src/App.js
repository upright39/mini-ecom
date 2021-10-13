
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navber';
import Contact from './pages/Content';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Basket from './pages/Basket';



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;




