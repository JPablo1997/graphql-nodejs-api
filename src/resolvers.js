import { tasks } from "./samples.js"
import User from "./models/user.js"

export const resolvers = {
	Query: {
		hello: () => { return "Hello World! GraphQL API" },
		greet: (root, args) => { console.log(args); return `Hello, ${args.name}!` },
		tasks: (root, { priority }) => { return tasks.filter( (task) => task.priority === priority ) },
		users: () => { return User.find() }
	},
	Mutation: {
		createTask: (root, { taskInput }) => { 
			taskInput._id = tasks.length
			tasks.push(taskInput); 
			return tasks[tasks.length - 1] 
		},
		createUser: (_, { userInput }) => {
			const user = new User(userInput)
			user.save()
			return user
		},
		updateUser: (_, { _id, userInput }) => {
			return User.findByIdAndUpdate(_id, userInput, { new: true })
		},
		deleteUser: (_, { _id }) => {
			return User.findByIdAndDelete({ _id: _id })
		}
	}
}
