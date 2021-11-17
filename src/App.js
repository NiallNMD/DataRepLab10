import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';
import Edit from './components/edit';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
{/* Navigation bar gotten from Bootstrap from import of bootstrap up above */}
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
       <Nav.Link href="/">Home</Nav.Link> {/*Puts a link between all the components and allows the route/switch to work */}
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
  </Navbar>
      <br></br>
       <Switch> {/*Allows routing to the individual components like content etc. */}
      <Route path='/' component={Content} exact />
      <Route path='/create' component={Create} exact />
      <Route path='/read' component={Read} exact />
      <Route path={"/edit/:id"} component={Edit} exact /> {/*Allows routing using search bar input */}
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
