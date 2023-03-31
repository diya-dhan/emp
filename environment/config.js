const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path : path.resolve(__dirname + '/.env')});

// const cfenv = require('cfenv');
// const appEnv = cfenv.getAppEnv();

// const services = appEnv.services["postgresql-db"][0].credentials;

// module.exports = {
//     port : appEnv.port,
//     user : services.username,
//     host : services.hostname,
//     password : services.password,
//     database : services.dbname,
//     db_port : services.port
// };

module.exports = {
    port : process.env.PORT,
    user : process.env.USER_NAME,
    host : process.env.HOST,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    db_port : process.env.DB_PORT
};