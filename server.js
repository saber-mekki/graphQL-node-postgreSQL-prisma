const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const { db } = require("./pgAdaptor");
const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/query");
const { mutation } = require("./schemas/mutation");

const schema = new GraphQLSchema({
  query,
  mutation,
});

const app = express();
app.use(
  "/api",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server Running"));

// //try this to test you db
// db.one("select * from project").then((res) => {
//   console.log(res);
// });
