import { GraphQLObjectType } from 'graphql'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import * as graphql from 'graphql'

require('dotenv').config()

const QueryRoot: GraphQLObjectType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => {
        return 'Hello world!'
      },
    },
  }),
})

const schema = new graphql.GraphQLSchema({ query: QueryRoot })

const app = express()
app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
app.listen(4000)
