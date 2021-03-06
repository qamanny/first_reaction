'use strict';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/09-Routing/Home';
import Overview from "./Components/Overview";
import EndContact from './Components/03-Props/ContactCard-Example/EndContact';
import User from './Components/03-Props/Static-Data/User';
import HomePage from './Components/05-States/Exercises/HomePage';
import SearchableList from './Components/07-Lifting-States/SearchableList';
import ProductManager from './Components/07-Lifting-States/Exercise/ProductManager';
import Clock from './Components/08-Hooks/Clock';
import Greet from './Components/08-Hooks/Exercise/Greet';
import LessText from './Components/08-Hooks/Exercise/LessText';
import NotFound from './Components/09-Routing/NotFound';
import Tesco from './Components/10-Data-Requests/Tesco';



const App = () => {
  return (
    <div className="container">
      <Router>
        <Overview />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Prop">
            <EndContact/>
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path="/States">
            <HomePage/>
          </Route>
          <Route path="/Lifting-States/Searchable">
            <SearchableList/>
          </Route>
          <Route path="/Lifting-States/ProductManager">
            <ProductManager/>
          </Route>
          <Route path="/UseEffect">
            <Clock/>
            <Greet name="Manny"/>
            <LessText text="Hello friends, how you doing today" maxLength={5}/>
          </Route>
          <Route path="/tesco">
            <Tesco/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;