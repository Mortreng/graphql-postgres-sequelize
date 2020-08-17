import { User } from "./models/user.model.js";
import { Op, where } from "sequelize";
import { updateUser, getUserById, createUser, deleteUser } from "./userService"

const resolvers = {
	Query: {
		user: async (parent, args, context, info)=>{
			return getUserById(args.id)
		},
		users: (parent, args, context, info) => {
			return User.findAll();
		}
	},
	Mutation: {
		createUser: async (parent, args, context, info)=>{
			return await createUser(args.name, args.email, args.age)
		},
		
		updateUser: async (parent, args, context, info)=>{
			return await updateUser(args.id, args.name, args.email, args.age)
		},

		deleteUser: async (parent, args, context, info) => {
			return await deleteUser(args.id)
		}
	}
};	
export default resolvers;