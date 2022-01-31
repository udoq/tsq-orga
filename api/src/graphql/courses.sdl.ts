export const schema = gql`
  type Course {
    id: String!
    category: String!
    course_type: String!
    day: String!
    time: String!
    members: [Member]!
  }

  type Query {
    courses: [Course!]! @requireAuth
    course(id: String!): Course @requireAuth
  }

  input CreateCourseInput {
    category: String!
    course_type: String!
    day: String!
    time: String!
  }

  input UpdateCourseInput {
    category: String
    course_type: String
    day: String
    time: String
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course! @requireAuth
    updateCourse(id: String!, input: UpdateCourseInput!): Course! @requireAuth
    deleteCourse(id: String!): Course! @requireAuth
  }
`
