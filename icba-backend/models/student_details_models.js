
const { DataTypes } = require('sequelize');
const sql = require('../config/config.js')


//Migration yet to update
const student_details = sql.define('student_details', {
  id:{
    type: DataTypes.INTEGER,
    allowNull:true,
    primaryKey: true,
    autoIncrement: true
  },
  icba_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type:DataTypes.STRING,
    allowNull: false,
  },
  phone:{
    type:DataTypes.STRING,
    allowNull: false
  },
  course_id:{
    type:DataTypes.STRING,
    allowNull: true //Change this if it is null 
    //Note here if set to false we need define a value upon inserting via ORM if
    /* if in DB course_id set false to not null means there is no need to ingest the data,
    the same we need to communicate here as well then ORM can understand the query  */
  },
  dob: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
    allowNull: true
  },
},{
  tableName: 'student_details'
});

student_details.sync().then(()=>{
  console.log("Sync success for student_details")
}).catch(err=>{
  console.log(err)
})



module.exports = student_details;
