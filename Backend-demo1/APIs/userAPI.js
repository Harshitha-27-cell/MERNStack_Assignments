import exp from 'express';
//create a mini express app
export const userApp=exp.Router();
// test local in-memory data 
let users = [];

// GET all users
userApp.get('/users', (req, res) => {
  // send users data in response
  res.status(200).json({
    message: "all users",
    payload: users
  });
});

// POST create user
userApp.post('/users', (req, res) => {
  // get user resource from request
  let newUser = req.body; 

  console.log("Request body:", newUser);
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
    //read id from url parameter
    let userId = Number(req.params.id);  

    //read user by this id
    let user = users.find((userObj) => userObj.id === userId);   


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
   // read id from url parameter
    let userId = Number(req.params.id);
      // find index of user with this id
    let userIndex = users.findIndex((userObj) => userObj.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    let deletedUser = users.splice(userIndex, 1);  
    //send res
    res.status(200).json({
        message: "User deleted",
        payload: deletedUser[0]
    });
});
