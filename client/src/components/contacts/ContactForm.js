import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../contexts/contact/contactContext';






function ContactForm() {


    const [contact,setContact] = useState({

        name:'',
        email:'',
        phone:'',
        type:'personal'
    })


    const {name,email,phone,type} = contact;



    const mycontext = useContext(MyContext)

    const {contacts,addContact,current,clearCurrent,updateContact} = mycontext;





    useEffect(()=>{
        if(current!==null)
        {
            setContact(current)
        }
        else
        {
            setContact({
                name:'',
                email:'',
                phone:'',
                type:'personal'
            })
        }
    },[current])




    const handleChange = (e) =>{
        setContact({...contact,
            [e.target.name]:e.target.value
        })
        // console.log(contact)
    }


    const handleSubmit=(e)=>{
       e.preventDefault()
       if(current===null)
       {
        addContact(contact)
       }
       else
       {
          updateContact(contact)
       }
        
        setContact({
                    name:'',
                    email:'',
                    phone:'',
                    type:'personal'
                 })
    }



    const handleClick=()=>{
        clearCurrent()
    }


    return (
        <div>
                    <form  onSubmit={handleSubmit}>
                        <h2 className='text-primary'>
                                 {current ? 'Edit Contact' : "Add Contact"}


                                
                        </h2>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        onChange={handleChange}
                    />
                    <h5>Contact Type</h5>
                    <input
                        type='radio'
                        name='type'
                        value='personal'
                        onChange={handleChange}
                        checked={type === 'personal'}
                    />{' '}
                    Personal{' '}
                    <input
                        type='radio'
                        name='type'
                        value='professional'
                        onChange={handleChange}
                        checked={type === 'professional'}
                       
                    />{' '}
                        Professional
                        <div>
                            <input
                            type='submit'
                             value= {current ? 'Update Contact' : "Add Contact"}
                            // value={Add contact}
                            className='btn btn-primary btn-block'
                            />
                        </div>


                      
     
               </form>


               {
                   current && (
                       <div>
                                <button className='btn btn-light btn-block' onClick={handleClick}>
                                       clear
                                </button>
                       </div>
                   )
               }
        </div>
    )
}

export default ContactForm
