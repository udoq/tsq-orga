export const schema = gql`
  type Member {
    id: String!
    kd_nr: Int!
    first_name: String!
    last_name: String!
    birthday: DateTime
    gender: String
    street: String
    zipcode: String
    city: String
    phone: String
    mobil: String
    email: String!
    Course: Course
    courseId: String
  }

  type Query {
    members: [Member!]! @requireAuth
    member(id: String!): Member @requireAuth
  }

  input CreateMemberInput {
    kd_nr: Int!
    first_name: String!
    last_name: String!
    birthday: DateTime
    gender: String
    street: String
    zipcode: String
    city: String
    phone: String
    mobil: String
    email: String!
    courseId: String
  }

  input UpdateMemberInput {
    kd_nr: Int
    first_name: String
    last_name: String
    birthday: DateTime
    gender: String
    street: String
    zipcode: String
    city: String
    phone: String
    mobil: String
    email: String
    courseId: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth
    updateMember(id: String!, input: UpdateMemberInput!): Member! @requireAuth
    deleteMember(id: String!): Member! @requireAuth
  }
`
