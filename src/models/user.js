import { Schema, model } from "mongoose"

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true,
	},
	age: Number
})

export default model("User", userSchema)
