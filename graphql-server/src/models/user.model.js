
import { Model, INTEGER, STRING, TEXT } from 'sequelize';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_database', 'postgres', 'lfybkfkf1122', {
	host: "db",
	dialect: 'postgres'
});

sequelize

sequelize
	.authenticate()
	.then(() => console.log('Connected'))
	.catch(console.error);

class User extends Model { }

User.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			// field: 'id'
			type: Sequelize.INTEGER
		},
		name: {
			allowNull: false,
			// unique: true,
			// field: 'firstName'
			type: Sequelize.STRING
		},
		email: {
			// unique: true,
			allowNull: false,
			type: Sequelize.STRING
		},
		age: {
			allowNull: true,
			type: Sequelize.INTEGER
		},
	},
	{
		sequelize,
		modelName: "User"
		// createdAt: 'created_at', 
		// updatedAt: 'updated_at'
	}
);

User.sync()

export { User }