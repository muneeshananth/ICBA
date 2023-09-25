const express = require('express');
const joi = require('joi')
// const sql = require('mysql')
const bcrypt = require('bcrypt')
const student_details = require('../../models/student_details_models')
const auth_user = require('../../models/auth_model')
const jwt = require('jsonwebtoken')


const routes = express.Router();


routes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  

  try {
    const authResult = await auth_user.findOne({
      where: {
        icba_id: username,
        password: password,
      },
    });

    if (!authResult) {
      res.status(200).json({ "data": "failed" });
    } else {
      console.log("Success")
      res.status(200).json({"data":`${username}`})

      //JWT Logic
      // Authentication successful
      // Access authResult to get user information, e.g., authResult.icba_id, authResult.role
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(200).json({ data: 'server_error' });
  }
});

routes.post('/register', async (req, res) => {
  try {
    const data = req.body;
    // Create a new student record
    const student = await student_details.create({
      name: data.username,
      email: data['e-mail'],
      phone: data.phone,
      icba_id: data.icba_id,
      DOB: data.dob,
      course_id:null
    });
    
    // Create a new authentication record
    await auth_user.create({
      role: 'user',
      icba_id: data.icba_id,
      password: data.password,
      phone: data.phone,
    });

    // OTP Logic
    // res.status(200).json({ "data" : });
    res.json({data:data.icba_id})
  } catch (error) {
    console.log(error)
    res.status(200).json({ data: 'failed' });
  }
});

routes.get('/user', async (req, res)=>{

  try{
    const id = req.query.id
    const studentDetails = await student_details.findOne({
      where: {
        icba_id: id,
      },
    });

    res.json({data:{id:studentDetails.icba_id, name:studentDetails.name, email:studentDetails.email, phone:studentDetails.phone, dob:studentDetails.dob}})

  }
  catch{
    res.json({failed:"failed"})
  }
  

  

})  

module.exports = routes;