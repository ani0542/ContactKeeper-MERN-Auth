import React, { useReducer } from 'react'
// import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import axios from 'axios';








import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
  } from '../types';



  const initialState={

          contacts:[],
          current:null,
          filtered:null,
          error:null
}







function ContactState(props) {


    const [state,dispatch] = useReducer(ContactReducer,initialState)













    //Add contact

    const addContact= async(contact)=>{



        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };



       
       try {
             const res = await axios.post('/api/contacts', contact, config);

                        dispatch({
                            type: ADD_CONTACT,
                            payload: res.data
                        });


       } catch (err) {
                        dispatch({
                                        type: CONTACT_ERROR,
                                        payload: err.response.msg
                            });



                      }
    }








    





 // Get Contacts
 const getContacts = async () => {
    try {

      const res = await axios.get('/api/contacts');

      dispatch({
                type: GET_CONTACTS,
                payload: res.data
              });

    } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });

    }
  };







  //update contact



   //update contact

   const updateContact=async(contact)=>{
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };



   
   try {
         const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);

                    dispatch({
                        type: UPDATE_CONTACT,
                        payload: res.data
                    });


   } catch (err) {
                    dispatch({
                                    type: CONTACT_ERROR,
                                    payload: err.response.msg
                        });



                  }
}





  //clear contact




  const clearContact=(id)=>{
    dispatch({type:CLEAR_CONTACTS})
}










    //Delete contact
  

 const deleteContact = async (id) => {
    try {

       await axios.delete(`/api/contacts/${id}`);

       dispatch({type:DELETE_CONTACT,payload:id})
    } catch (err) {

            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });

    }
  };



    //set current contact


    const setCurrent = (contact)=>{
        dispatch({type:SET_CURRENT,payload:contact})
    }


    //clear current contact


    const clearCurrent=()=>{
        dispatch({type:CLEAR_CURRENT})
    }





   



 //filter contact

 const filterContact =(text)=>{
    dispatch({type:FILTER_CONTACTS,payload:text})
  }


  //clear filter


  const clearFilter =()=>{
    dispatch({type:CLEAR_FILTER})
  }
 





    return (
           <ContactContext.Provider value={{
               contacts:state.contacts,
               addContact:addContact,
               deleteContact:deleteContact,
               setCurrent:setCurrent,
               clearCurrent:clearCurrent,
               current:state.current,
               updateContact:updateContact,
               clearFilter:clearFilter,
               filterContact:filterContact,
               filtered:state.filtered,
               error:state.error,
               getContacts:getContacts,
               clearContact:clearContact

           }}>
                   {props.children}   
           </ContactContext.Provider>
    )
}

export default ContactState
