import React, { Component } from 'react';
import './App.css';
import Content from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreatePost } from './components/createPost';
import { ReadPosts } from './components/readPosts';
import Edit from './components/editPosts';

class App extends Component {

  render() {
    return (
      <Router>

        <div className="App" >
          
          {/* Navigation bar gotten from Bootstrap from import of bootstrap up above */}
          <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="#home" >Essay Haven</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home Page</Nav.Link> {/*Puts a link between all the components and allows the route/switch to work */}
              <Nav.Link href="/readPosts" >List of Entrys</Nav.Link>
              <Nav.Link href="/createPost">Create Post</Nav.Link>

            </Nav>
          </Navbar>
         
          <br></br>
          <Switch> {/*Allows routing to the individual components like content etc. */}
            <Route path='/' component={Content} exact />
            <Route path='/createPost' component={CreatePost} exact />
            <Route path='/readPosts' component={ReadPosts} exact />
            <Route path={"/edit/:id"} component={Edit} exact /> {/*Allows routing using search bar input */}
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
