https://www.telerik.com/blogs/graphql-mutation-and-database-access

GraphQL: Mutation and Database Access

instead of using a DBMS (MySQL/Postgres..) + ORM (prisma for ex), we will use an service provided by prisma-cloud.

Adding Prisma Demo server
https://v1.prisma.io/docs/1.34/prisma-server/demo-servers-prisma-cloud-jfr3/


    https://www.npmjs.com/package/prisma-yml
    1- npm install -g prisma.
    2- cd src/prisma.
    3- prisma init.    --Require login and follow the instructions, this will generate .yml and couple of files in "./generated/prisma-client/"
    4- Open the auto-generated datamodel inside./src/prisma/datamodel.prisma, and update it with our datamodel.
    5- prisma generate.   --This command will update the file "prisma-schema.js", to be consistent with our data-model inside datamodel.prisma.
        Set up a new Prisma server or deploy to an existing server:         Demo server + MySQL database
        Choose a name for your service:                                     ProjectName
        Choose a name for your stage:                                       dev
        Select the programming language for the generated Prisma:           client Prisma JavaScript Client 
    6- prisma deploy 
    7- npm install prisma-client-lib 

The prisma doc and (prisma online Demo db-server) at this point is bit inconsistent, due to upgrade from prisma1 to prisma2
The mapping between the prisma layer and the (demo db-server) is done after looking at prisma-schema.js, couldn't find any good docs! 



in the GraphWL-palyground run the flwg query
mutation {
  book1: book(title: "GraphQL book8", pages: 801, chapters: 802 , price: 8.3, available: true ,authors:[
       { name:"arth1" , email: "a@a.com"},
  ]) {
    id,
    title
  },
