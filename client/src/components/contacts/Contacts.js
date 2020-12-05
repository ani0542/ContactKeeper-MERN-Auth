import React, { Fragment, useContext, useEffect } from 'react'
import MyContext from '../../contexts/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner'
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Contacts() {


    const mycontext = useContext(MyContext)

    // console.log(mycontext)


    const {contacts,filtered,getContacts,loading} = mycontext;


    console.log(contacts)

    console.log(loading)



    useEffect(()=>{
        getContacts()
         // eslint-disable-next-line
    },[])




    // if (contacts !== null && contacts.length === 0 && !loading) {
    //     return <h4>Please add a contact</h4>;
    //   }



    return (
        <div>

     

        {
            filtered ? filtered.map((value)=>{
                return (
                             <ContactItem value={value}/>
                )
            })
        :
              
                  contacts.map((value,index)=>{
                      return (
                              <ContactItem  key={value._id}value={value}/>
                      )
                  })
              }
    </div>







//     <Fragment>
//     {contacts !== null && !loading ? (
//             <TransitionGroup>
//                 {filtered !== null
//                 ? filtered.map(contact => (
//                     <CSSTransition
//                         key={contact._id}
//                         timeout={500}
//                         classNames='item'
//                     >
//                         <ContactItem contact={contact} />
//                     </CSSTransition>
//                     ))
//                 : contacts.map(contact => (
//                     <CSSTransition
//                         key={contact._id}
//                         timeout={500}
//                         classNames='item'
//                     >
//                         <ContactItem contact={contact} />
//                     </CSSTransition>
//                     ))}
//             </TransitionGroup>
//     ) : (
//       <Spinner />
//     )}
//   </Fragment>
    )
}

export default Contacts
