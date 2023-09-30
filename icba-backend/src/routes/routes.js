const express = require('express');
const joi = require('joi')
// const sql = require('mysql')
const bcrypt = require('bcrypt')
const student_details = require('../../models/student_details_models')
const auth_user = require('../../models/auth_model')
const jwt = require('jsonwebtoken')
const icba_videos = require('../../models/icba_videos_model')

//Orm Requirements
const { Op } = require('sequelize');


const routes = express.Router();


routes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  console.log(username, password);

  try {
    const authResult = await auth_user.findOne({
      where: {
        [Op.or]: [
          { icba_id: username },
          { phone: username },
        ],
        password: password,
      },
    });
    
    // const data = {username:authResult.dataValues.icba_id, role:authResult.dataValues.role}
    if (!authResult) {
      res.status(200).json({ "data": "failed" });
    } else {
      console.log("Success")
      res.status(200).json({data:{user:authResult.dataValues.icba_id, role:authResult.dataValues.role}})

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
        [Op.or]: [
          { icba_id: id },
          { phone: id },
        ],
      },
    });
    res.json({data:{id:studentDetails.icba_id, name:studentDetails.name, email:studentDetails.email, phone:studentDetails.phone, dob:studentDetails.dob}})
  }
  catch{
    res.json({failed:"failed"})
  }

});

routes.get('/ibvideos', async(req, res)=>{
  try{
    const data = await icba_videos.findAll()
    console.log(data)
    res.json({data:data})
  }
  catch{
    res.status(500).json({data:"Try Again Later"})
  }
})

routes.post('/update_ibvideos', async(req, res)=>{
  try{
    const data={title:req.body.title.trim(), video_url:req.body.video_url.trim()}
    console.log(data)
    const response = await icba_videos.update(data,{
      where:{
        id:req.body.index+1
      },
    }).then(res=>{
      
    })
    res.json({data:'success'})
  }catch (e){
    console.log(e)
    res.json({data:"Internal server error"})
  }
})

module.exports = routes;