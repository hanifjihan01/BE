import  sequelize  from "sequelize";

const db = new sequelize('article','root','',{
    host:'localhost',
    dialect: 'mysql'
});

export default db;
