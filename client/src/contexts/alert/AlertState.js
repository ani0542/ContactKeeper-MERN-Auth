import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import alertContext from './alertContext';
import alertReducer from './alertReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    SET_ALERT,
    REMOVE_ALERT,
   
  } from '../types';



  const initialState=[]







function AlertState(props) {


    const [state,dispatch] = useReducer(alertReducer,initialState)


    console.log(state)

   //set alert



   const setAlert=(msg,type)=>{
       const id=uuidv4()

       dispatch({
           type:SET_ALERT,
           payload:{msg,type,id}
       })

       setTimeout(()=>{
           dispatch({type:REMOVE_ALERT,payload:id})
       },5000)
   }













    return (
           <alertContext.Provider value={{
              
            setAlert,
            alerts:state

           }}>
                   {props.children}  


           </alertContext.Provider>
    )
}

export default AlertState
