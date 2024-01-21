import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers.js"

const typeDefs = `
	type Query {
		hello: String
		greet(name: String): String
		tasks(priority: Int): [Task]
		users: [User]
	}

	type Task {
		_id: ID
		title: String!
		description: String
		priority: Int!
	}

	type User {
		_id: ID
		firstName: String!
		lastName: String!
		age: Int
	}

	type Mutation {
		createTask(taskInput: TaskInput): Task
		createUser(userInput: UserInput): User
		updateUser(_id: ID, userInput: UserInput): User
		deleteUser(_id: ID): User
	}

	input TaskInput {
		title: String!
		description: String
		priority: Int!
	}

	input UserInput {
		firstName: String!
		lastName: String!
		age: Int
	}
`

export default makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolvers
})
