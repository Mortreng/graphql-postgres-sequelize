import { User } from "./models/user.model.js";
import { Op, where } from "sequelize";

export function getUserById(id) {
    return User.findOne({
        where:{
            id: {
                [Op.eq]:id
            }
        }
    });
}

export async function updateUser(id,name,email,age){
    let user = getUserById(id)
    let newUser = await User.update({

        name: name ? name :user.name,
        email: email ? email : user.email,
        age: age ? age : user.age
    }, {
        where:{
            id:{
                [Op.eq]:id
            }
        }    
    });
    return getUserById(id)
}

export async function createUser(name,email,age){
    let freshUser = await User.create({
        name, email, age
    });
    return freshUser
}

export async function deleteUser(id){
    let deletedUser = await User.destroy({
        where : {
            id: {
                [Op.eq]:id
            }
        }
    });
    if (deleteUser<1)
        throw Error('No user with this id${id}')
    return true;
}