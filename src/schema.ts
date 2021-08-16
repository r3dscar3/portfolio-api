import { gql } from 'apollo-server';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Page {
    id: Int!
    name: String
    description: String
		slug: String
		emoji: String
  }

  type Section {
    id: Int!
		pageId: Int
    title: String
		description: String
		sortOrder: Int
    sectionItems: [SectionItem]
  }

  type SectionItem {
    id: Int!
    title: String
    description: String
		sortOrder: Int
		years: Int
		src: String
		emoji: String
  }

  type Query {
    page(id: Int!): Page!
		sections(id: Int!): [Section!]!
		pages: [Page!]!
  }
`;

export default typeDefs;
