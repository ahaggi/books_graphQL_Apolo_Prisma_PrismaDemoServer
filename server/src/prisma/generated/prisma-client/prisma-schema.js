module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAuthor {
  count: Int!
}

type AggregateBook {
  count: Int!
}

type AggregateBooksOnAuthors {
  count: Int!
}

type Author {
  id: ID!
  name: String
  email: String!
  books(where: BooksOnAuthorsWhereInput, orderBy: BooksOnAuthorsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BooksOnAuthors!]
}

type AuthorConnection {
  pageInfo: PageInfo!
  edges: [AuthorEdge]!
  aggregate: AggregateAuthor!
}

input AuthorCreateInput {
  id: ID
  name: String
  email: String!
  books: BooksOnAuthorsCreateManyWithoutAuthorInput
}

input AuthorCreateOneWithoutBooksInput {
  create: AuthorCreateWithoutBooksInput
  connect: AuthorWhereUniqueInput
}

input AuthorCreateWithoutBooksInput {
  id: ID
  name: String
  email: String!
}

type AuthorEdge {
  node: Author!
  cursor: String!
}

enum AuthorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
}

type AuthorPreviousValues {
  id: ID!
  name: String
  email: String!
}

type AuthorSubscriptionPayload {
  mutation: MutationType!
  node: Author
  updatedFields: [String!]
  previousValues: AuthorPreviousValues
}

input AuthorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AuthorWhereInput
  AND: [AuthorSubscriptionWhereInput!]
  OR: [AuthorSubscriptionWhereInput!]
  NOT: [AuthorSubscriptionWhereInput!]
}

input AuthorUpdateInput {
  name: String
  email: String
  books: BooksOnAuthorsUpdateManyWithoutAuthorInput
}

input AuthorUpdateManyMutationInput {
  name: String
  email: String
}

input AuthorUpdateOneWithoutBooksInput {
  create: AuthorCreateWithoutBooksInput
  update: AuthorUpdateWithoutBooksDataInput
  upsert: AuthorUpsertWithoutBooksInput
  delete: Boolean
  disconnect: Boolean
  connect: AuthorWhereUniqueInput
}

input AuthorUpdateWithoutBooksDataInput {
  name: String
  email: String
}

input AuthorUpsertWithoutBooksInput {
  update: AuthorUpdateWithoutBooksDataInput!
  create: AuthorCreateWithoutBooksInput!
}

input AuthorWhereInput {
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
  books_every: BooksOnAuthorsWhereInput
  books_some: BooksOnAuthorsWhereInput
  books_none: BooksOnAuthorsWhereInput
  AND: [AuthorWhereInput!]
  OR: [AuthorWhereInput!]
  NOT: [AuthorWhereInput!]
}

input AuthorWhereUniqueInput {
  id: ID
  email: String
}

type BatchPayload {
  count: Long!
}

type Book {
  id: ID!
  title: String
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
  authors(where: BooksOnAuthorsWhereInput, orderBy: BooksOnAuthorsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BooksOnAuthors!]
}

type BookConnection {
  pageInfo: PageInfo!
  edges: [BookEdge]!
  aggregate: AggregateBook!
}

input BookCreateInput {
  id: ID
  title: String
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
  authors: BooksOnAuthorsCreateManyWithoutBookInput
}

input BookCreateOneWithoutAuthorsInput {
  create: BookCreateWithoutAuthorsInput
  connect: BookWhereUniqueInput
}

input BookCreateWithoutAuthorsInput {
  id: ID
  title: String
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
}

type BookEdge {
  node: Book!
  cursor: String!
}

enum BookOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  pages_ASC
  pages_DESC
  chapters_ASC
  chapters_DESC
  price_ASC
  price_DESC
  available_ASC
  available_DESC
}

type BookPreviousValues {
  id: ID!
  title: String
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
}

type BooksOnAuthors {
  id: ID!
  book: Book
  author: Author
}

type BooksOnAuthorsConnection {
  pageInfo: PageInfo!
  edges: [BooksOnAuthorsEdge]!
  aggregate: AggregateBooksOnAuthors!
}

input BooksOnAuthorsCreateInput {
  id: ID
  book: BookCreateOneWithoutAuthorsInput
  author: AuthorCreateOneWithoutBooksInput
}

input BooksOnAuthorsCreateManyWithoutAuthorInput {
  create: [BooksOnAuthorsCreateWithoutAuthorInput!]
  connect: [BooksOnAuthorsWhereUniqueInput!]
}

input BooksOnAuthorsCreateManyWithoutBookInput {
  create: [BooksOnAuthorsCreateWithoutBookInput!]
  connect: [BooksOnAuthorsWhereUniqueInput!]
}

input BooksOnAuthorsCreateWithoutAuthorInput {
  id: ID
  book: BookCreateOneWithoutAuthorsInput
}

input BooksOnAuthorsCreateWithoutBookInput {
  id: ID
  author: AuthorCreateOneWithoutBooksInput
}

type BooksOnAuthorsEdge {
  node: BooksOnAuthors!
  cursor: String!
}

enum BooksOnAuthorsOrderByInput {
  id_ASC
  id_DESC
}

type BooksOnAuthorsPreviousValues {
  id: ID!
}

input BooksOnAuthorsScalarWhereInput {
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
  AND: [BooksOnAuthorsScalarWhereInput!]
  OR: [BooksOnAuthorsScalarWhereInput!]
  NOT: [BooksOnAuthorsScalarWhereInput!]
}

type BooksOnAuthorsSubscriptionPayload {
  mutation: MutationType!
  node: BooksOnAuthors
  updatedFields: [String!]
  previousValues: BooksOnAuthorsPreviousValues
}

input BooksOnAuthorsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BooksOnAuthorsWhereInput
  AND: [BooksOnAuthorsSubscriptionWhereInput!]
  OR: [BooksOnAuthorsSubscriptionWhereInput!]
  NOT: [BooksOnAuthorsSubscriptionWhereInput!]
}

input BooksOnAuthorsUpdateInput {
  book: BookUpdateOneWithoutAuthorsInput
  author: AuthorUpdateOneWithoutBooksInput
}

input BooksOnAuthorsUpdateManyWithoutAuthorInput {
  create: [BooksOnAuthorsCreateWithoutAuthorInput!]
  delete: [BooksOnAuthorsWhereUniqueInput!]
  connect: [BooksOnAuthorsWhereUniqueInput!]
  set: [BooksOnAuthorsWhereUniqueInput!]
  disconnect: [BooksOnAuthorsWhereUniqueInput!]
  update: [BooksOnAuthorsUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [BooksOnAuthorsUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [BooksOnAuthorsScalarWhereInput!]
}

input BooksOnAuthorsUpdateManyWithoutBookInput {
  create: [BooksOnAuthorsCreateWithoutBookInput!]
  delete: [BooksOnAuthorsWhereUniqueInput!]
  connect: [BooksOnAuthorsWhereUniqueInput!]
  set: [BooksOnAuthorsWhereUniqueInput!]
  disconnect: [BooksOnAuthorsWhereUniqueInput!]
  update: [BooksOnAuthorsUpdateWithWhereUniqueWithoutBookInput!]
  upsert: [BooksOnAuthorsUpsertWithWhereUniqueWithoutBookInput!]
  deleteMany: [BooksOnAuthorsScalarWhereInput!]
}

input BooksOnAuthorsUpdateWithoutAuthorDataInput {
  book: BookUpdateOneWithoutAuthorsInput
}

input BooksOnAuthorsUpdateWithoutBookDataInput {
  author: AuthorUpdateOneWithoutBooksInput
}

input BooksOnAuthorsUpdateWithWhereUniqueWithoutAuthorInput {
  where: BooksOnAuthorsWhereUniqueInput!
  data: BooksOnAuthorsUpdateWithoutAuthorDataInput!
}

input BooksOnAuthorsUpdateWithWhereUniqueWithoutBookInput {
  where: BooksOnAuthorsWhereUniqueInput!
  data: BooksOnAuthorsUpdateWithoutBookDataInput!
}

input BooksOnAuthorsUpsertWithWhereUniqueWithoutAuthorInput {
  where: BooksOnAuthorsWhereUniqueInput!
  update: BooksOnAuthorsUpdateWithoutAuthorDataInput!
  create: BooksOnAuthorsCreateWithoutAuthorInput!
}

input BooksOnAuthorsUpsertWithWhereUniqueWithoutBookInput {
  where: BooksOnAuthorsWhereUniqueInput!
  update: BooksOnAuthorsUpdateWithoutBookDataInput!
  create: BooksOnAuthorsCreateWithoutBookInput!
}

input BooksOnAuthorsWhereInput {
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
  book: BookWhereInput
  author: AuthorWhereInput
  AND: [BooksOnAuthorsWhereInput!]
  OR: [BooksOnAuthorsWhereInput!]
  NOT: [BooksOnAuthorsWhereInput!]
}

input BooksOnAuthorsWhereUniqueInput {
  id: ID
}

type BookSubscriptionPayload {
  mutation: MutationType!
  node: Book
  updatedFields: [String!]
  previousValues: BookPreviousValues
}

input BookSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookWhereInput
  AND: [BookSubscriptionWhereInput!]
  OR: [BookSubscriptionWhereInput!]
  NOT: [BookSubscriptionWhereInput!]
}

input BookUpdateInput {
  title: String
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
  authors: BooksOnAuthorsUpdateManyWithoutBookInput
}

input BookUpdateManyMutationInput {
  title: String
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
}

input BookUpdateOneWithoutAuthorsInput {
  create: BookCreateWithoutAuthorsInput
  update: BookUpdateWithoutAuthorsDataInput
  upsert: BookUpsertWithoutAuthorsInput
  delete: Boolean
  disconnect: Boolean
  connect: BookWhereUniqueInput
}

input BookUpdateWithoutAuthorsDataInput {
  title: String
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
}

input BookUpsertWithoutAuthorsInput {
  update: BookUpdateWithoutAuthorsDataInput!
  create: BookCreateWithoutAuthorsInput!
}

input BookWhereInput {
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
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  pages: Int
  pages_not: Int
  pages_in: [Int!]
  pages_not_in: [Int!]
  pages_lt: Int
  pages_lte: Int
  pages_gt: Int
  pages_gte: Int
  chapters: Int
  chapters_not: Int
  chapters_in: [Int!]
  chapters_not_in: [Int!]
  chapters_lt: Int
  chapters_lte: Int
  chapters_gt: Int
  chapters_gte: Int
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  available: Boolean
  available_not: Boolean
  authors_every: BooksOnAuthorsWhereInput
  authors_some: BooksOnAuthorsWhereInput
  authors_none: BooksOnAuthorsWhereInput
  AND: [BookWhereInput!]
  OR: [BookWhereInput!]
  NOT: [BookWhereInput!]
}

input BookWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAuthor(data: AuthorCreateInput!): Author!
  updateAuthor(data: AuthorUpdateInput!, where: AuthorWhereUniqueInput!): Author
  updateManyAuthors(data: AuthorUpdateManyMutationInput!, where: AuthorWhereInput): BatchPayload!
  upsertAuthor(where: AuthorWhereUniqueInput!, create: AuthorCreateInput!, update: AuthorUpdateInput!): Author!
  deleteAuthor(where: AuthorWhereUniqueInput!): Author
  deleteManyAuthors(where: AuthorWhereInput): BatchPayload!
  createBook(data: BookCreateInput!): Book!
  updateBook(data: BookUpdateInput!, where: BookWhereUniqueInput!): Book
  updateManyBooks(data: BookUpdateManyMutationInput!, where: BookWhereInput): BatchPayload!
  upsertBook(where: BookWhereUniqueInput!, create: BookCreateInput!, update: BookUpdateInput!): Book!
  deleteBook(where: BookWhereUniqueInput!): Book
  deleteManyBooks(where: BookWhereInput): BatchPayload!
  createBooksOnAuthors(data: BooksOnAuthorsCreateInput!): BooksOnAuthors!
  updateBooksOnAuthors(data: BooksOnAuthorsUpdateInput!, where: BooksOnAuthorsWhereUniqueInput!): BooksOnAuthors
  upsertBooksOnAuthors(where: BooksOnAuthorsWhereUniqueInput!, create: BooksOnAuthorsCreateInput!, update: BooksOnAuthorsUpdateInput!): BooksOnAuthors!
  deleteBooksOnAuthors(where: BooksOnAuthorsWhereUniqueInput!): BooksOnAuthors
  deleteManyBooksOnAuthorses(where: BooksOnAuthorsWhereInput): BatchPayload!
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
  author(where: AuthorWhereUniqueInput!): Author
  authors(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Author]!
  authorsConnection(where: AuthorWhereInput, orderBy: AuthorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AuthorConnection!
  book(where: BookWhereUniqueInput!): Book
  books(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Book]!
  booksConnection(where: BookWhereInput, orderBy: BookOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookConnection!
  booksOnAuthors(where: BooksOnAuthorsWhereUniqueInput!): BooksOnAuthors
  booksOnAuthorses(where: BooksOnAuthorsWhereInput, orderBy: BooksOnAuthorsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BooksOnAuthors]!
  booksOnAuthorsesConnection(where: BooksOnAuthorsWhereInput, orderBy: BooksOnAuthorsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BooksOnAuthorsConnection!
  node(id: ID!): Node
}

type Subscription {
  author(where: AuthorSubscriptionWhereInput): AuthorSubscriptionPayload
  book(where: BookSubscriptionWhereInput): BookSubscriptionPayload
  booksOnAuthors(where: BooksOnAuthorsSubscriptionWhereInput): BooksOnAuthorsSubscriptionPayload
}
`
      }
    