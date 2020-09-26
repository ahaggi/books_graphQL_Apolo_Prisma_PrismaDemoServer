const { ApolloServer, gql } = require('apollo-server-express');
const { json } = require('express');
const { prisma } = require('./prisma/generated/prisma-client')
// type Book{..,  author: Author}   

// type Query {..,  
// Authors: [Author!]
// Author(id: Int!): Author
// }  

//schema definition: (query functions + objects) definition
const typeDefs = gql`
type Book {
  id: ID!
  title: String!
  pages: Int
  chapters: Int
  price: Float
  available: Boolean
  authors: [Author!]!
}

type Author {
  id: ID!
  name: String!
  email:String!
  books: [Book!]!
}

type Query {
  books: [Book!]
  book(id: ID!): Book
  authors: [Author!]
}
input AuthorInput {
  name: String
  email: String
}


type Mutation {
  book(title: String!, authors: [AuthorInput]!, pages: Int, chapters: Int, price:Float, available:Boolean): Book!
}

`;


//implementation of (query functions + objects) 
const resolvers = {
  Mutation: {
    book: async (root, args, context, info) => _createBook(args, context)
  },
  Query: {
    books: (_, __, context, ___) => context.prisma.books(),
    book: (root, args, context, info) => context.prisma.book({ id: args.id }),
    authors: (root, args, context, info) => context.prisma.authors()
  },
  // unnecessary to implement the "type Book", unless we need to process something; Take a look at the "title" field
  // Book: {
  //   id: (parent, args) => parent.id,
  //   title: (parent, args) => {
  //     console.log(parent)
  //     return "Bla bla bla: "+ parent.title  // Notice how we appended "The title:"
  //   }, 
  //   // pages: (parent, args) => parent.pages,
  //   // chapters: (parent, args) => parent.chapters
  // }
  // ,


  // notice the resolvers for the fields with scalar types in Book and Author was omitted. 
  // This is because the GraphQL can infer them by matching the result to a property of the same name from the parent parameter.
  Book: {
    authors: (parent, args, context) => context.prisma.book({ id: parent.id }).authors()
  },
  Author: {
    books: (parent, args, context) =>
      context.prisma.author({ id: parent.id }).books()
  }
};



const server = new ApolloServer({ typeDefs, resolvers, context: { prisma } });

module.exports = server;




let _createBook = async (args, context) => {
  // IMPORTANT!!
  // context.prisma.createBook takes "BookCreateInput" which has the flwg structure:

  // BookCreateInput {
  //   id: ID
  //   title: String
  //   pages: Int
  //   chapters: Int
  //   price: Float
  //   available: Boolean
  //   authors: BooksOnAuthorsCreateManyWithoutBookInput {
  //                 create: [
  //                   BooksOnAuthorsCreateWithoutBookInput {
  //                     id: ID
  //                     author: AuthorCreateOneWithoutBooksInput {
  //                                   create: AuthorCreateWithoutBooksInput {
  //                                           id: ID
  //                                           name: String
  //                                           email: String!
  //                                   }
  //                                   connect: AuthorWhereUniqueInput {
  //                                               id: ID
  //                                               email: String // Bruk enten id eller email ikke begge!
  //                                             }
  //                     }
  //                   }
  //                 ]
  //                 connect: [ // kommer ikke å bruke denne i funksjonen "createBook". Fordi et nytt "book"-Tuple, kan ikke ha en tilsvarende tuple i  "BooksOnAuthors" 
  //                   BooksOnAuthorsWhereUniqueInput {
  //                     id: ID
  //                   }
  //                 ]
  //   }
  // }

  BooksOnAuthorsCreateWithoutBookInput = [];


  for (const _arthors of args.authors) {
    const authorFound = await context.prisma.author({ email: _arthors.email });
    if (authorFound) {
      let _toConnect = {
        author: {
          connect: {
            id: authorFound.id,
          }
        }
      }
      BooksOnAuthorsCreateWithoutBookInput.push(_toConnect);
    }
    else {
      let _toCreate = {
        author: {
          create: {
            name: _arthors.name,
            email: _arthors.email
          }
        }
      };
      BooksOnAuthorsCreateWithoutBookInput.push(_toCreate);
    }
  }
  BooksOnAuthorsCreateWithoutBookInput.forEach(e => {
    console.log(e)
  });

  return context.prisma.createBook({
    title: args.title,
    pages: args.pages,
    chapters: args.chapters,
    price: args.price,
    available: args.available,
    authors: {
      create: BooksOnAuthorsCreateWithoutBookInput
    }
  });
}




