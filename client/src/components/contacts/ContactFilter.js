// import React, { useContext ,useRef,useEffect} from 'react'
// import MyContext from '../../contexts/contact/contactContext';


// function ContactFilter() {

//     const mycontext = useContext(MyContext)

//     const {clearFilter,filterContact,filtered} = mycontext;


//     // let ref = useRef();

//     const ref=useRef('')



//     const handleChange=(e)=>{
//         console.log(ref.current.value)
//         // console.log(ref.current)

//         console.log(e.target.value)

//         if(ref.current.value !== '')
//         {
//             filterContact(e.target.value)
//         }
//         else
//         {
//             clearFilter()
//         }
//     }


//     useEffect(()=>{
//         if(filtered === null)
//         {
//             ref.current.value=''
//         }
//     })

//     return (
//         <div>
//                 <form>
//                          <input type='text' placeholder='Filter Contacts...' ref={ref} onChange={handleChange}/>
//                 </form>  
//         </div>
//     )
// }

// export default ContactFilter



























import React, { useContext, useEffect, useRef } from 'react'
import MyContext from '../../contexts/contact/contactContext';

function ContactsFilter() {


    const mycontext = useContext(MyContext)
    
    const {filterContact,clearFilter,filtered} = mycontext;


    const ref=useRef('')



    const handleChange=(e)=>{
        console.log(ref.current.value)
        // console.log(ref.current)

        console.log(e.target.value)

        if(ref.current.value !== '')
        {
            filterContact(e.target.value)
        }
        else
        {
            clearFilter()
        }
    }


    // useEffect(()=>{
    //     if(filtered === null)
    //     {
    //         ref.current.value=''
    //     }
    // })


    // useEffect(()=>{
    //     ref.current.focus()
    // },[])





    return (
        <div>
                <form>
                         <input type='text' placeholder='Filter Contacts...' ref={ref} onChange={handleChange}/>
                </form>  
        </div>
    )
}

export default ContactsFilter
