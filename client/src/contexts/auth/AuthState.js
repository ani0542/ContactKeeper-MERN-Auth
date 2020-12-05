import React, { useReducer } from 'react'
import axios from 'axios'; 
import authContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';




import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
   
  } from '../types';





  const initialState={
     
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    error:null,
    user:null
}







function AuthState(props) {


    const [state,dispatch] = useReducer(authReducer,initialState)





    //load user(to know who users logged in)


    const loadUser = async()=>{
           //todo looad token into global heders


           if(localStorage.token){
             setAuthToken(localStorage.token)
           }



           try {
                const res = await axios.get(`/api/auth/user`)

                dispatch({type:USER_LOADED,payload:res.data})


           } catch (err) {
                dispatch({type:AUTH_ERROR})
           }
    }








    
    //register user








    const register = async(formData)=>{


      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };



      try {
        const res = await axios.post('/api/users/register', formData, config);

            dispatch({
              type: REGISTER_SUCCESS,
              payload: res.data
            });

            

            loadUser()

      } 
      catch (err) {
                    dispatch({
                      type: REGISTER_FAIL,
                      payload: err.response.data.msg
                    });
      }
  
    }












    //login user




    const login = async(formData)=>{


      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };



      try {


        const res = await axios.post('/api/auth/login', formData, config);

            dispatch({
              type: LOGIN_SUCCESS,
              payload: res.data
            });

            

            loadUser()

      } 
             catch (err) {
                          dispatch({
                            type: LOGIN_FAIL,
                            payload: err.response.data.msg
                          });
      }
  
    }





    //logout



  const logout = () => dispatch({ type: LOGOUT });

    


    // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });









    return (
           <authContext.Provider value={{
              
            token:state.token,
            user:state.user,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            error:state.error,
            register:register,
            clearErrors:clearErrors,
            loadUser:loadUser,
            login:login,
            logout:logout



           }}>
                   {props.children}   
           </authContext.Provider>
    )
}

export default AuthState
