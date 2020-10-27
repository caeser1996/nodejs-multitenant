import path from "path";
import Sequelize from "sequelize";

import configs from "../../../database/config"

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = configs[env];
let sequelize = config.use_env_variable
? new Sequelize(config.url, config)
: new Sequelize(config.database, config.username, config.password, config);
module.exports = sequelize