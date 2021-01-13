import './App.css';
import React,{useState} from 'react';
import {Navbar, Nav, NavbarBrand, Container, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import IngredientsPage from './components/IngredientsPage';
import ErrorPage from './components/ErrorPage';
import {StateContext, SetStateContext} from './providers';

const initialState = {
  items: [
    {name: "mozzarella", category: "cheese"},
    {name: "cheddar", category: "cheese"},
    {name: "kebab", category: "meat"}, 
    {name: "cooked beef", category: "meat"}, 
    {name: "chicken ham", category: "meat"},
    {name: "spinach", category: "vegtebales"},
    {name: "olives", category: "vegtebales"},
    {name: "genoa", category: "salami"},
    {name: "picante", category: "salami"},
    {name: "ananas", category: "fruit"},
    {name: "tangarine", category: "fruit"}
  ]
}

function App() {
  const [state,setState] = useState(initialState);

  


  return (
    <StateContext.Provider value={state}>
      <SetStateContext.Provider value={setState}>

      <Router>
  <div className="App">
  <Navbar color="light" light expand="md"> 
  <Link to="/" className="navbar-brand"> Pizza Maker</Link>
    <Nav className="mr-auto" navbar>
      <NavItem>
        <Link to="/ingredients" className="nav-link">Ingredients</Link>
      </NavItem>
    </Nav>
  </Navbar>
  <Container>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/order/pizza" exact component={OrderPage}/>
      <Route path="/order/calzone" exact component={OrderPage}/>
      <Route path="/ingredients" exact component={IngredientsPage}/>
      <Route path="/" component={ErrorPage} />
      {
        /* 
        <Route path="/order/calzone" exact component={() => <Order source="../calzoneIcon.png" type="Calzone" />} />
        <Route path="/ingredients" exact component={IngredientPage} />
        <Route path="/" component={ErrorComponent} />
        */ 
      }
      
    </Switch>
  </Container>
  </div>
</Router>

</SetStateContext.Provider>
</StateContext.Provider>
      
  );
}

export default App;
