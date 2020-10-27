import Model from "../models";
import sequelize from "../models/tenant/service/db"
import _ from "lodash";
import { findOrCreate } from "./index";
import { hashPassword } from "../lib/passwordOp";
import catchAsync from "../lib/catchAsync";
import uuid from "uuid/v4";
// import { Sequelize } from "sequelize/types";
import User from "../models/tenant/sub_user"
const { user_master } = Model;

export const signupService = catchAsync(async (req, res, next) => {
  // console.log(user_master);
  const password = await hashPassword(req.body.password);

  const email = req.body.email.toLowerCase();
  req.body.schemaName = req.body.schemaName + uuid().split("-")[1];// create a unique schema 
  let schema_name = req.body.schemaName
  
  
  console.log(schema_name)
  // return;
  const [usermaster, created] = await findOrCreate(user_master, {
    ...req.body,
    password,
    email
  });

  if (!created) {
    return res.status(400).json({
      status: "fail",
      message: "user already exist"
    });
  }
  else {
    sequelize.createSchema(schema_name, { ifNotExists: true })
    .then(async () => {
        sequelize.sync(
            {
                force: false,
                schema: schema_name
            }
        )
    })
    .then(function() {
        User.schema(schema_name).create({
          username: 'janedoe',
          birthday: new Date(1980, 6, 20)
      });
      
    })
    return res.status(201).json({
      status: "success",
      message: "user successfully created",
      payload: _.omit(usermaster.toJSON(), ["password"])
    });
  }
});
