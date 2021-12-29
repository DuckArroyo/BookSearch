## Working notes

1. code review
2. install dependencies
   - root
   - client
   - server
   - Details in [README.md](https://github.com/DuckArroyo/BookSearch/blob/main/README.md)
3. Test scripts
   - server runs
   - client runs
   - main sripts (concurrently) runs
4. Clean React app. - pending 12/28

## GitHub - Heroku

Heroku app created

- create heroku branch `herokudeploy`
- connected heroku to `herokudeploy` branch
- already deployed - need to update

## Create mongoDB - PENDING

## To fulfill the Challenge, you’ll need to do the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.
3. Create an Apollo Provider so that requests can communicate with an Apollo Server.
4. Deploy the application to Heroku.

# To Do

## Back End

Create schemas model
index
typedefs.js
resolvers.js

## implement Apollo Server 2 as demonstrated in the activities, you MUST use the following script npm install apollo-server-express@2.15.0 to install Apollo Server 2.

## Front End

Create Queries
Create Mutations

## More Front End

Additionally, you’ll need to complete the following tasks in each of these front-end files:

App.js: Create an Apollo Provider to make every request work with the Apollo server.

SearchBooks.js:

Use the Apollo useMutation() Hook to execute the SAVE_BOOK mutation in the handleSaveBook() function instead of the saveBook() function imported from the API file.

Make sure you keep the logic for saving the book's ID to state in the try...catch block!

SavedBooks.js:

Remove the useEffect() Hook that sets the state for UserData.

Instead, use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.

Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file. (Make sure you keep the removeBookId() function in place!)

SignupForm.js: Replace the addUser() functionality imported from the API file with the ADD_USER mutation functionality.

LoginForm.js: Replace the loginUser() functionality imported from the API file with the LOGIN_USER mutation functionality.
