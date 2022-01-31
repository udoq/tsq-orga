export const schema = gql`
  type Member {
    id: String!
    first_name: String!
    last_name: String!
    phone: String
    mobil: String
    email: String!
    Courses: [Course]!
  }

  type Query {
    members: [Member!]! @requireAuth
    member(id: String!): Member @requireAuth
  }

  input CreateMemberInput {
    first_name: String!
    last_name: String!
    phone: String
    mobil: String
    email: String!
  }

  input UpdateMemberInput {
    first_name: String
    last_name: String
    phone: String
    mobil: String
    email: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth
    updateMember(id: String!, input: UpdateMemberInput!): Member! @requireAuth
    deleteMember(id: String!): Member! @requireAuth
  }
`
