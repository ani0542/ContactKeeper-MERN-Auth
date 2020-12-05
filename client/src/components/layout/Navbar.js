import React, { useContext ,Fragment} from 'react'
import { Link } from 'react-router-dom';
import WeContext from '../../contexts/auth/authContext';
import MyContext from '../../contexts/contact/contactContext';



function Navbar({title,icon}) {


  const weContext= useContext(WeContext)

  const mycontext = useContext(MyContext)



  

  const {register,error,clearErrors,isAuthenticated,logout,user} = weContext


  const {contacts,filtered,getContacts,loading,clearContact} = mycontext;


const onLogout=()=>{
  logout()
  clearContact()
}




  const authLinks = (
    <Fragment>
           <li>Hello {user && user.name}</li>
           <li>
                     <a onClick={onLogout}  href='#!'>
                        <i className='fas fa-sign-out-alt' />{' '}
                        <span className='hide-sm'>Logout</span>
                     </a>
          </li>
    </Fragment>
  );





  const guestLinks = (
    <Fragment>
                  <li>
                        <Link to='/register'>Register</Link>
                  </li>
                  <li>
                        <Link to='/login'>Login</Link>
                  </li>
    </Fragment>
  );






    return (
        <div className='navbar bg-primary'>
      <h1>
        {/* <Link to='/'> */}
          <i className={icon} /> {title}
        {/* </Link> */}
      </h1>

      <ul>
              <ul>{isAuthenticated ? authLinks : guestLinks}</ul>

      </ul>
      
    </div>
    )
}



Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
  };




export default Navbar
