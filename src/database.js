import mongoose from "mongoose"

export async function connect() {
	try{
		await mongoose.connect("mongodb+srv://[USER]:[PASSWORD]@[HOSTNAME]/graphdb?retryWrites=true&w=majority")
		console.log(">>> Connected to the DB!")
	} catch (e) {
		console.log("Something goes wrong!")
		console.log(e)
	}

}
