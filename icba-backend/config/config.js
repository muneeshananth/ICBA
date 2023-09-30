const { Sequelize } = require('sequelize');

const HOST = "srv429.hstgr.io";
const USER = "u344736263_root";
const PASSWORD = "Ia3/adM]rH4";
const DATABASE = "u344736263_icba";

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
