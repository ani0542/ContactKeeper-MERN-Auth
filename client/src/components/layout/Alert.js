import React, { useContext } from 'react'
import OurContext from '../../contexts/alert/alertContext'

function Alert() {

   const ourcontext= useContext(OurContext)

   const {alerts}=ourcontext;



   console.log(alerts)
   

    return (
       
               alerts.length > 0 && alerts.map((alert)=>{
                //    console.log(alert)
                   return (
                       <div key={alert.id} className={`alert alert-${alert.type}`}>
                             <i className='fas fa-info-circle'/>{alert.msg}
                       </div>
                   )
               })
      
    )
}

export default Alert
