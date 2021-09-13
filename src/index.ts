 const express = require( "express" );
 const app = express();
 const port = 8000; // default listen port

 // define route handler for default home page
 app.get("/", (req, res) => {
     res.send("Hello World");
 } );

 // start the server
 app.listen( port, () => {
     console.log(`Listening at http://localhost:${ port }` );

 } );

