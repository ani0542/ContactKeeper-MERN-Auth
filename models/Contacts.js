
const mongoose=require('mongoose') 
const ContactSchema=new mongoose.Schema({
    

    //how to make relation between one model to another

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Uset'
    },
    name:{
        type:String,
        required: [true, 'Please enter an name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        
        lowercase: true,
       
      },
      phone: {
        type: String,
      
      },
      type:{
          type:String,
          default:'personal'
      },
      register_date:{
        type: Date,
        default:Date.now,
      }

})

module.exports=mongoose.model('Contact',ContactSchema)








