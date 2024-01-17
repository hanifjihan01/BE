import  sequelize  from "sequelize";

import db from "../config/Database.js";

const {DataTypes} = sequelize;

const User = db.define('posts', {
    title: DataTypes.STRING(200),
    content: DataTypes.TEXT,
    category: DataTypes.STRING(100),
    status: DataTypes.STRING(100)

}, {
    freezeTableName:true
})

export default User;

(async()=> {
        await db.sync(); 
})();
