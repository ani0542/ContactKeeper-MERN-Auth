import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './contexts/contact/ContactState';
import AuthState from './contexts/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './contexts/alert/AlertState';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';



if(localStorage.token){
    setAuthToken(localStorage.token)
  }



function App() {
    return (
    <AuthState>
        <ContactState>

            <AlertState>

         <Router>
        <div>
               <Navbar/>
               <div className='container'>
                   <Alert/>
                        <Switch>
                        <PrivateRoute exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                         
                        </Switch>
                        
               </div>
        </div>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
    )
}

export default App
