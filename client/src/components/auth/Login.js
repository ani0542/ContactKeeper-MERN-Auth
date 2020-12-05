import React, { useContext, useEffect, useState } from 'react';
import WeContext from '../../contexts/auth/authContext'
import OurContext from '../../contexts/alert/alertContext'




function Login(props) {


    const [user,setUser] = useState({
      
        email:'',
        password:'',
       
    })


    const {email,password}  = user;







    const weContext= useContext(WeContext)


    const ourcontext= useContext(OurContext)



    const {alerts,setAlert}=ourcontext;


    const {login,error,clearErrors,isAuthenticated} = weContext


  



    useEffect(()=>{
      if (error === 'Invalid credentials' || error === 'User Does not exist') {
  
        setAlert(error, 'danger');
        clearErrors();
  
      }
  
  
      if(isAuthenticated)
      {
        props.history.push('/')
      }



      
    },[error,isAuthenticated,props.history])



    const onChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }


    const onSubmit=(e)=>{
      
        e.preventDefault()
        console.log(user)

        if( email==='' || password===''){
          setAlert('Pease enter all fields','danger')
        }
        else {
          login({
            email,
            password
          })
        }

        setUser({
          
            email:'',
            password:'',
           
        })
    }

    return (
       <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
       
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            // required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            // required
            minLength='6'
          />
        </div>
       
        <input
          type='submit'
          value='login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
    )
}

export default Login
