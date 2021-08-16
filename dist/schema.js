"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = apollo_server_1.gql `
  type Page {
    id: Int!
    title: String!
    description: String!
    sections: [Section!]!
  }

  type Section {
    id: Int!
    title: String!
    page: Page!
    sectionItems: [SectionItem!]!
  }

  type SectionItem {
    id: Int!
    title: String!
    description: String!
    section: Section!
  }

  type Query {
    page(id: Int!): Page
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map