const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const AdminType = new GraphQLObjectType({
  name: "admin",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    joined: { type: GraphQLString },
    last_logged_in: { type: GraphQLString },
  },
});

const ProjectType = new GraphQLObjectType({
  name: "Project",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    creator_id: { type: GraphQLString },
    created: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
});

exports.AdminType = AdminType;
exports.ProjectType = ProjectType;
