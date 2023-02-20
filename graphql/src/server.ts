import { GraphQLObjectType } from 'graphql'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import * as graphql from 'graphql'
import articles from './articles'

require('dotenv').config()

// TODO: articleの型をここで定義する

const QueryRoot: GraphQLObjectType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => {
        return 'Hello world!'
      },
    },
    articles: {
      type: graphql.GraphQLString, // TODO: 定義したarticleの型をここで利用する
      resolve: () => {
        return articles
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
