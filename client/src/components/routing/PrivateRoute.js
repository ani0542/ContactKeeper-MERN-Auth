import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import WeContext from '../../contexts/auth/authContext'

const PrivateRoute = ({ component: Component, ...rest }) => {


    const weContext= useContext(WeContext)


    const {loading,isAuthenticated} = weContext





  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;