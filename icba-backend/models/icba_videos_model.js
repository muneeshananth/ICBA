const { DataTypes } = require('sequelize');
const sql = require('../config/config.js')


const icba_videos = sql.define('icba_videos',{
    id:{
      type: DataTypes.INTEGER,
      allowNull:true,
      primaryKey: true,
      autoIncrement: true
    },
    title:{
        type: DataTypes.CHAR,
        allowNull: false,
    },
    video_url:{
        type: DataTypes.CHAR,
        allowNull: false
    },
    createdat: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
      allowNull: false
    },
    updatedat: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
      allowNull: false
    }, 
  },{
    tableName:'icba_videos'
  });

icba_videos.sync().then(()=>{
    console.log("Sync success for icba_videos")
}).catch(err=>{
    console.log(err)
})


module.exports = icba_videos;