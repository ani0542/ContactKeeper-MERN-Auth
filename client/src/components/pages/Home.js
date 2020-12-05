import React, { useContext, useEffect } from 'react'
import ContactFilter from '../contacts/ContactFilter'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import WeContext from '../../contexts/auth/authContext'







function Home(props) {



    const weContext= useContext(WeContext)

    const {register,error,clearErrors,isAuthenticated,loadUser} = weContext


    useEffect(()=>{
         loadUser()
    },[])
    




    return (
        <div className='grid-2'>
                <div>
                        {/* //contact form// */}

                        <ContactForm/>
                </div>


                <div>
                       <ContactFilter/>
                       <Contacts/> 
                </div>
        </div>
    )
}

export default Home
