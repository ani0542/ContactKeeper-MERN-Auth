import {SET_ALERT,
    REMOVE_ALERT}  from '../types'


    export default (state,action)=>{
        switch(action.type)
        {
            case SET_ALERT:
                return [...state,action.payload]

            case REMOVE_ALERT:
                return state.filter((value)=>{
                    // console.log(value.id)
                    // console.log(action.payload)
                    return value.id !== action.payload
                })
            default:
                return state
        }
    }