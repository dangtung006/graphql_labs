const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs    = require("./shema/schema");
const resolvers = require("./resolver/resolver");

const server = new ApolloServer({ typeDefs, resolvers });
const app    = express();

server.start().then(r=>{
    server.applyMiddleware({ app : app});
    
})


app.listen({ port : 3000}, ()=>{
    console.log("app started");
});