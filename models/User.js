
const mongoose=require('mongoose') 
const UserSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required: [true, 'Please enter an name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
       
      },
      password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [5, 'Minimum password length is 5 characters'],
      },
      register_date:{
        type: Date,
        default:Date.now,
      }

})

module.exports=mongoose.model('Uset',UserSchema)








