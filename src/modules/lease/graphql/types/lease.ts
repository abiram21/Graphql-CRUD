import { GraphQLFloat } from "graphql";

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");

const GraphQLLease = new GraphQLObjectType({
  name: "Property",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Property id",
    },
    address: {
        type: new GraphQLNonNull(GraphQLString),
        description: "type code",
    },
    owner: {
        type: new GraphQLNonNull(GraphQLString),
        description: "Address of the student",
    },
    leases: {
        type: new GraphQLNonNull(GraphQLFloat)
    },
    status: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    description: {
      type: new GraphQLNonNull(GraphQLFloat)
    }
  },
});

export default GraphQLLease
