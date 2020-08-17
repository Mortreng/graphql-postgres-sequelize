import { User } from "./models/user.model.js";
import { Op, where } from "sequelize";


function userResolver(parent, variables, context, info) {
	return User.findOne({
		where: {
			id: {
				[Op.eq]: variables.id
			}
		}
	});
}

const resolvers = {
	Query: {
		user: userResolver,
		users: (parent, args, context, info) => {
			return User.findAll();
		}
	},
	Mutation: {
		createUser: async (parent, { name, email, age }, context, info) => {
			const user = await User.create({
				name, email, age
			});
			return user;
		},
		updateUser: async (parent, { id, name, email, age }, context, info) => {
			let user = User.findByPk(id)
			let newName;
			if (name) {
				newName = name
			} else {
				newName = user.name
			}
			const upUser = await User.update({
				name: newName,
				email: email ? email : user.email,
				age: age ? age : user.age
			}, {
				where: {
					id: {
						[Op.eq]: id
					}
				}
			});

			return upUser;
		},
		deleteUser: async (parent, { id }, context, info) => {
			const delUsersNumber = await User.destroy({
				where: {
					id: {
						[Op.eq]: id
					}
				}
			});
			if (delUsersNumber < 1)
				throw Error(`User not found by id ${id}`)
			return true
			// })

			//		if (userIndex === -1) throw new Error("user not found");

			//		const deleteUsers = users.splice(userIndex, 1);

			//		return deleteUsers[0];
		}
	}
};
export default resolvers;