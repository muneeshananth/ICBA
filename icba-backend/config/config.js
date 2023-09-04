const { Sequelize } = require('sequelize');

const HOST = "localhost";
const USER = "root";
const PASSWORD = "Admin@123";
const DATABASE = "icba";

const sql = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql', // Specify the dialect here
});

sql.authenticate().then(()=>{
    console.log("DB Success")
}).catch(()=>{
    console.log("error")
})

module.exports = sql;
