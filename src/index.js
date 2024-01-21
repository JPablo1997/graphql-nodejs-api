import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema.js'
import { connect } from './database.js'
import NoIntrospection from 'graphql-disable-introspection'

const app = express()
connect()

app.get("/", (req, res) => res.send("Welcome to GraphQL API - Powered by Nodejs"))

app.use("/graphql", graphqlHTTP({
	graphiql: true,
	schema: schema,
	validationRules: [NoIntrospection]
}))

const PORT = 9000

app.listen(PORT, () => {console.log(`

Listening on port ${PORT}...

`)})
