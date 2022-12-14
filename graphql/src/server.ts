import { GraphQLObjectType } from 'graphql'
import joinMonster from 'join-monster'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import * as graphql from 'graphql'
import { Client } from 'pg'

require('dotenv').config()

const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
})
client.connect()

const Article: GraphQLObjectType = new graphql.GraphQLObjectType({
  name: 'Article',
  extensions: {
    joinMonster: {
      sqlTable: 'article',
      uniqueKey: 'id',
    },
  },
  fields: () => ({
    id: { type: graphql.GraphQLInt },
    title: { type: graphql.GraphQLString },
    summary: { type: graphql.GraphQLString },
    content: { type: graphql.GraphQLString },
    posted_at: { type: graphql.GraphQLString },
    updated_at: { type: graphql.GraphQLString },
  }),
})

const QueryRoot: GraphQLObjectType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: graphql.GraphQLString,
      resolve: () => 'Hello world!',
    },
    articles: {
      type: new graphql.GraphQLList(Article),
      resolve: (parent, args, context, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql: any) => {
          return client.query(sql)
        })
      },
    },
    article: {
      type: Article,
      args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },
      where: (articleTable: string, args: any, context: any) =>
        `${articleTable}.id = ${args.id}`,
      resolve: (parent: any, args: any, context: any, resolveInfo) => {
        return joinMonster(resolveInfo, {}, (sql: any) => {
          return client.query(sql)
        })
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
