const { DataTypes } = require('sequelize');
const sql = require('../config/config.js')


//Authentication

const auth_user = sql.define('authentication_table',{
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    icba_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    role:{
      type:DataTypes.STRING,
      allowNull:false
    },
    phone:{
      type:DataTypes.STRING,
      allowNull:false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
      allowNull: false
    }, 
  },{
    tableName:'authentication_table'
  });

auth_user.sync().then(()=>{
    console.log("Sync success for auth_table")
}).catch(err=>{
    console.log(err)
})


module.exports = auth_user;