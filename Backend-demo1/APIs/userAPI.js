import exp from 'express';
//create a mini express(separate route) app
export const userApp=exp.Router();
// test local in-memory data (lost when the server restarts)
let users = [];

// GET all users
userApp.get('/users', (req, res) => {
  // send users data in response
  res.status(200).json({
    message: "all users",
    payload: users
  });
  // format: message and payload
  // status helps to get the status code
  // eg: 200 -> successful completion
  // every server will send 200 by default if the operation is successful
});

// POST create user
userApp.post('/users', (req, res) => {
  // get user resource from request
  let newUser = req.body; 
  // req.body -> contains the data sent by client
  // we need to parse the body using middleware

  console.log("Request body:", newUser);

  // add user to local array
  users.push(newUser);

  res.status(201).json({
    message: "user created",
    payload: newUser
  });
});

// PUT update user
userApp.put('/users/:id' ,(req, res) => {
 // get modified user data from req body
  let modifiedUser = req.body;

 // get id from request params
  let userId = Number(req.params.id);

 // find the user with id exists in array
  let userIndex = users.findIndex(
    userObj => userObj.id === userId
  );

 // if user not found , then send res as "user not found"
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
 // if user found , then modify the user
  else { 
    users[userIndex] = modifiedUser;

 // send res as "User modified" with modified user data
    res.status(200).json({
      message: "User modified",
      payload: modifiedUser
    });
  }
});

//read user by id
userApp.get('/users/:id', (req, res) => {
    //console.log(req.params)   -> run this in the terminal
    //read id from url parameter
    let userId = Number(req.params.id);  
    //params returns the object (key-value pair) of url parameters  
    // here eg: {id:'3003'}  
    //(id can be any var)  
    // -> anything converted to string when it is passed using URL  
    //(therefore v r converting to No. can be done using parsing)

    //read user by this id
    let user = users.find((userObj) => userObj.id === userId);   
    //returns undefined if not found

    //send response
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
        message: "User found",
        payload: user
    });
});

// DELETE user
userApp.delete('/users/:id', (req, res) => {
    let userId = Number(req.params.id);
    let userIndex = users.findIndex((userObj) => userObj.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    let deletedUser = users.splice(userIndex, 1);  
    //splice return array of deleted element

    res.status(200).json({
        message: "User deleted",
        payload: deletedUser[0]
    });
});
