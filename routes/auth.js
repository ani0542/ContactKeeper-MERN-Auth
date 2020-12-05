const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const config=require('config')
const jwt = require("jsonwebtoken");
const User = require('../models/User')
const auth = require('../middleware/auth')


//login

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error('User Does not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    const token = jwt.sign({ id: user._id }, config.get('JWT_SECRET'), { expiresIn: 3600 });
    if (!token) throw Error('Couldnt sign the token');

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});






  //get the user who logged in 


  router.get('/user',auth,(req,res)=>{
    User.findById(req.user.id)
    .select('-password')
    .then((user)=>{
        return res.json(user)
    })
})





module.exports= router;
