module.exports = {
        typeDefs: /* GraphQL */ `type AggregateExercise {
  count: Int!
}

type AggregateSession {
  count: Int!
}

type AggregateSet {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Exercise {
  id: ID!
  session: Session!
  name: String!
  sets(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Set!]
}

type ExerciseConnection {
  pageInfo: PageInfo!
  edges: [ExerciseEdge]!
  aggregate: AggregateExercise!
}

input ExerciseCreateInput {
  session: SessionCreateOneWithoutExercisesInput!
  name: String!
  sets: SetCreateManyWithoutExerciseInput
}

input ExerciseCreateManyWithoutSessionInput {
  create: [ExerciseCreateWithoutSessionInput!]
  connect: [ExerciseWhereUniqueInput!]
}

input ExerciseCreateOneWithoutSetsInput {
  create: ExerciseCreateWithoutSetsInput
  connect: ExerciseWhereUniqueInput
}

input ExerciseCreateWithoutSessionInput {
  name: String!
  sets: SetCreateManyWithoutExerciseInput
}

input ExerciseCreateWithoutSetsInput {
  session: SessionCreateOneWithoutExercisesInput!
  name: String!
}

type ExerciseEdge {
  node: Exercise!
  cursor: String!
}

enum ExerciseOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ExercisePreviousValues {
  id: ID!
  name: String!
}

type ExerciseSubscriptionPayload {
  mutation: MutationType!
  node: Exercise
  updatedFields: [String!]
  previousValues: ExercisePreviousValues
}

input ExerciseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExerciseWhereInput
  AND: [ExerciseSubscriptionWhereInput!]
  OR: [ExerciseSubscriptionWhereInput!]
  NOT: [ExerciseSubscriptionWhereInput!]
}

input ExerciseUpdateInput {
  session: SessionUpdateOneRequiredWithoutExercisesInput
  name: String
  sets: SetUpdateManyWithoutExerciseInput
}

input ExerciseUpdateManyMutationInput {
  name: String
}

input ExerciseUpdateManyWithoutSessionInput {
  create: [ExerciseCreateWithoutSessionInput!]
  delete: [ExerciseWhereUniqueInput!]
  connect: [ExerciseWhereUniqueInput!]
  disconnect: [ExerciseWhereUniqueInput!]
  update: [ExerciseUpdateWithWhereUniqueWithoutSessionInput!]
  upsert: [ExerciseUpsertWithWhereUniqueWithoutSessionInput!]
}

input ExerciseUpdateOneRequiredWithoutSetsInput {
  create: ExerciseCreateWithoutSetsInput
  update: ExerciseUpdateWithoutSetsDataInput
  upsert: ExerciseUpsertWithoutSetsInput
  connect: ExerciseWhereUniqueInput
}

input ExerciseUpdateWithoutSessionDataInput {
  name: String
  sets: SetUpdateManyWithoutExerciseInput
}

input ExerciseUpdateWithoutSetsDataInput {
  session: SessionUpdateOneRequiredWithoutExercisesInput
  name: String
}

input ExerciseUpdateWithWhereUniqueWithoutSessionInput {
  where: ExerciseWhereUniqueInput!
  data: ExerciseUpdateWithoutSessionDataInput!
}

input ExerciseUpsertWithoutSetsInput {
  update: ExerciseUpdateWithoutSetsDataInput!
  create: ExerciseCreateWithoutSetsInput!
}

input ExerciseUpsertWithWhereUniqueWithoutSessionInput {
  where: ExerciseWhereUniqueInput!
  update: ExerciseUpdateWithoutSessionDataInput!
  create: ExerciseCreateWithoutSessionInput!
}

input ExerciseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  session: SessionWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  sets_every: SetWhereInput
  sets_some: SetWhereInput
  sets_none: SetWhereInput
  AND: [ExerciseWhereInput!]
  OR: [ExerciseWhereInput!]
  NOT: [ExerciseWhereInput!]
}

input ExerciseWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createExercise(data: ExerciseCreateInput!): Exercise!
  updateExercise(data: ExerciseUpdateInput!, where: ExerciseWhereUniqueInput!): Exercise
  updateManyExercises(data: ExerciseUpdateManyMutationInput!, where: ExerciseWhereInput): BatchPayload!
  upsertExercise(where: ExerciseWhereUniqueInput!, create: ExerciseCreateInput!, update: ExerciseUpdateInput!): Exercise!
  deleteExercise(where: ExerciseWhereUniqueInput!): Exercise
  deleteManyExercises(where: ExerciseWhereInput): BatchPayload!
  createSession(data: SessionCreateInput!): Session!
  updateSession(data: SessionUpdateInput!, where: SessionWhereUniqueInput!): Session
  updateManySessions(data: SessionUpdateManyMutationInput!, where: SessionWhereInput): BatchPayload!
  upsertSession(where: SessionWhereUniqueInput!, create: SessionCreateInput!, update: SessionUpdateInput!): Session!
  deleteSession(where: SessionWhereUniqueInput!): Session
  deleteManySessions(where: SessionWhereInput): BatchPayload!
  createSet(data: SetCreateInput!): Set!
  updateSet(data: SetUpdateInput!, where: SetWhereUniqueInput!): Set
  updateManySets(data: SetUpdateManyMutationInput!, where: SetWhereInput): BatchPayload!
  upsertSet(where: SetWhereUniqueInput!, create: SetCreateInput!, update: SetUpdateInput!): Set!
  deleteSet(where: SetWhereUniqueInput!): Set
  deleteManySets(where: SetWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  exercise(where: ExerciseWhereUniqueInput!): Exercise
  exercises(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exercise]!
  exercisesConnection(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExerciseConnection!
  session(where: SessionWhereUniqueInput!): Session
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session]!
  sessionsConnection(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SessionConnection!
  set(where: SetWhereUniqueInput!): Set
  sets(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Set]!
  setsConnection(where: SetWhereInput, orderBy: SetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SetConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Session {
  id: ID!
  user: User!
  name: String!
  createdAt: DateTime!
  exercises(where: ExerciseWhereInput, orderBy: ExerciseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exercise!]
}

type SessionConnection {
  pageInfo: PageInfo!
  edges: [SessionEdge]!
  aggregate: AggregateSession!
}

input SessionCreateInput {
  user: UserCreateOneWithoutSessionsInput!
  name: String
  exercises: ExerciseCreateManyWithoutSessionInput
}

input SessionCreateManyWithoutUserInput {
  create: [SessionCreateWithoutUserInput!]
  connect: [SessionWhereUniqueInput!]
}

input SessionCreateOneWithoutExercisesInput {
  create: SessionCreateWithoutExercisesInput
  connect: SessionWhereUniqueInput
}

input SessionCreateWithoutExercisesInput {
  user: UserCreateOneWithoutSessionsInput!
  name: String
}

input SessionCreateWithoutUserInput {
  name: String
  exercises: ExerciseCreateManyWithoutSessionInput
}

type SessionEdge {
  node: Session!
  cursor: String!
}

enum SessionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SessionPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
}

type SessionSubscriptionPayload {
  mutation: MutationType!
  node: Session
  updatedFields: [String!]
  previousValues: SessionPreviousValues
}

input SessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SessionWhereInput
  AND: [SessionSubscriptionWhereInput!]
  OR: [SessionSubscriptionWhereInput!]
  NOT: [SessionSubscriptionWhereInput!]
}

input SessionUpdateInput {
  user: UserUpdateOneRequiredWithoutSessionsInput
  name: String
  exercises: ExerciseUpdateManyWithoutSessionInput
}

input SessionUpdateManyMutationInput {
  name: String
}

input SessionUpdateManyWithoutUserInput {
  create: [SessionCreateWithoutUserInput!]
  delete: [SessionWhereUniqueInput!]
  connect: [SessionWhereUniqueInput!]
  disconnect: [SessionWhereUniqueInput!]
  update: [SessionUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [SessionUpsertWithWhereUniqueWithoutUserInput!]
}

input SessionUpdateOneRequiredWithoutExercisesInput {
  create: SessionCreateWithoutExercisesInput
  update: SessionUpdateWithoutExercisesDataInput
  upsert: SessionUpsertWithoutExercisesInput
  connect: SessionWhereUniqueInput
}

input SessionUpdateWithoutExercisesDataInput {
  user: UserUpdateOneRequiredWithoutSessionsInput
  name: String
}

input SessionUpdateWithoutUserDataInput {
  name: String
  exercises: ExerciseUpdateManyWithoutSessionInput
}

input SessionUpdateWithWhereUniqueWithoutUserInput {
  where: SessionWhereUniqueInput!
  data: SessionUpdateWithoutUserDataInput!
}

input SessionUpsertWithoutExercisesInput {
  update: SessionUpdateWithoutExercisesDataInput!
  create: SessionCreateWithoutExercisesInput!
}

input SessionUpsertWithWhereUniqueWithoutUserInput {
  where: SessionWhereUniqueInput!
  update: SessionUpdateWithoutUserDataInput!
  create: SessionCreateWithoutUserInput!
}

input SessionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  exercises_every: ExerciseWhereInput
  exercises_some: ExerciseWhereInput
  exercises_none: ExerciseWhereInput
  AND: [SessionWhereInput!]
  OR: [SessionWhereInput!]
  NOT: [SessionWhereInput!]
}

input SessionWhereUniqueInput {
  id: ID
}

type Set {
  id: ID!
  exercise: Exercise!
  setNo: Int!
  reps: Int!
  weight: String!
}

type SetConnection {
  pageInfo: PageInfo!
  edges: [SetEdge]!
  aggregate: AggregateSet!
}

input SetCreateInput {
  exercise: ExerciseCreateOneWithoutSetsInput!
  setNo: Int!
  reps: Int!
  weight: String!
}

input SetCreateManyWithoutExerciseInput {
  create: [SetCreateWithoutExerciseInput!]
  connect: [SetWhereUniqueInput!]
}

input SetCreateWithoutExerciseInput {
  setNo: Int!
  reps: Int!
  weight: String!
}

type SetEdge {
  node: Set!
  cursor: String!
}

enum SetOrderByInput {
  id_ASC
  id_DESC
  setNo_ASC
  setNo_DESC
  reps_ASC
  reps_DESC
  weight_ASC
  weight_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SetPreviousValues {
  id: ID!
  setNo: Int!
  reps: Int!
  weight: String!
}

type SetSubscriptionPayload {
  mutation: MutationType!
  node: Set
  updatedFields: [String!]
  previousValues: SetPreviousValues
}

input SetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SetWhereInput
  AND: [SetSubscriptionWhereInput!]
  OR: [SetSubscriptionWhereInput!]
  NOT: [SetSubscriptionWhereInput!]
}

input SetUpdateInput {
  exercise: ExerciseUpdateOneRequiredWithoutSetsInput
  setNo: Int
  reps: Int
  weight: String
}

input SetUpdateManyMutationInput {
  setNo: Int
  reps: Int
  weight: String
}

input SetUpdateManyWithoutExerciseInput {
  create: [SetCreateWithoutExerciseInput!]
  delete: [SetWhereUniqueInput!]
  connect: [SetWhereUniqueInput!]
  disconnect: [SetWhereUniqueInput!]
  update: [SetUpdateWithWhereUniqueWithoutExerciseInput!]
  upsert: [SetUpsertWithWhereUniqueWithoutExerciseInput!]
}

input SetUpdateWithoutExerciseDataInput {
  setNo: Int
  reps: Int
  weight: String
}

input SetUpdateWithWhereUniqueWithoutExerciseInput {
  where: SetWhereUniqueInput!
  data: SetUpdateWithoutExerciseDataInput!
}

input SetUpsertWithWhereUniqueWithoutExerciseInput {
  where: SetWhereUniqueInput!
  update: SetUpdateWithoutExerciseDataInput!
  create: SetCreateWithoutExerciseInput!
}

input SetWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  exercise: ExerciseWhereInput
  setNo: Int
  setNo_not: Int
  setNo_in: [Int!]
  setNo_not_in: [Int!]
  setNo_lt: Int
  setNo_lte: Int
  setNo_gt: Int
  setNo_gte: Int
  reps: Int
  reps_not: Int
  reps_in: [Int!]
  reps_not_in: [Int!]
  reps_lt: Int
  reps_lte: Int
  reps_gt: Int
  reps_gte: Int
  weight: String
  weight_not: String
  weight_in: [String!]
  weight_not_in: [String!]
  weight_lt: String
  weight_lte: String
  weight_gt: String
  weight_gte: String
  weight_contains: String
  weight_not_contains: String
  weight_starts_with: String
  weight_not_starts_with: String
  weight_ends_with: String
  weight_not_ends_with: String
  AND: [SetWhereInput!]
  OR: [SetWhereInput!]
  NOT: [SetWhereInput!]
}

input SetWhereUniqueInput {
  id: ID
}

type Subscription {
  exercise(where: ExerciseSubscriptionWhereInput): ExerciseSubscriptionPayload
  session(where: SessionSubscriptionWhereInput): SessionSubscriptionPayload
  set(where: SetSubscriptionWhereInput): SetSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  name: String!
  email: String!
  password: String!
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  sessions: SessionCreateManyWithoutUserInput
}

input UserCreateOneWithoutSessionsInput {
  create: UserCreateWithoutSessionsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSessionsInput {
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  sessions: SessionUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutSessionsInput {
  create: UserCreateWithoutSessionsInput
  update: UserUpdateWithoutSessionsDataInput
  upsert: UserUpsertWithoutSessionsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSessionsDataInput {
  name: String
  email: String
  password: String
}

input UserUpsertWithoutSessionsInput {
  update: UserUpdateWithoutSessionsDataInput!
  create: UserCreateWithoutSessionsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  sessions_every: SessionWhereInput
  sessions_some: SessionWhereInput
  sessions_none: SessionWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    