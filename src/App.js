import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import Details from './components/products/Details';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Default from './components/Default'
import Cart from './components/cart'
import Modal from './components/products/Modal'


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/details' component={Details} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal/>
      </div>

    </React.Fragment>

    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <Switch>
    //       <Route exact path='/' component={Dashboard} />
    //       <Route path='/project/:id' component={ProjectDetails} />
    //       <Route path='/signin' component={SignIn} />
    //       <Route path='/signup' component={SignUp} />
    //       <Route path='/create' component={CreateProject} />

    //     </Switch>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
