import { User } from "./models/user.model.js";
import { Op, where } from "sequelize";

let UserService = {
    findUserById: function (id) {
        return User.findByPk(id)
    }


}