const User = require('../mongooseDB');

const userController = {};

userController.findUser = (req, res, next) => {
  const { username } = req.query;
  console.log(username)


  User.findOne({username: username})
  .then((user) => {
      if(!user) return next({error: 'user not defined', code: '418'})
      res.locals.incredients = user.incredients;
      return next()
    })
      .catch(err => {return next({error: 'db find error', code: '418'})})
};

userController.createUser = (req, res, next) => {
  const { username } = req.body;

  User.findOne({username: username})
    .then(user => {
      if(user) {console.log("user exists")
        return next({error: 'user already exists', code: '418'})}
    
    User.create ({
      username: username,
      incredients: {love: "true"},
    })
    .then((data) => { 
      res.locals.incredients = {love: "true"};
      return next()
    })
      .catch(err => {return next({error: 'db find error', code: '418'})})

  })
};

userController.update = (req, res, next) => {
  const { username } = req.query;
  console.log(username)
  const { incredients } = req.body;
  console.log(incredients)
  User.updateOne({username: username}, {
    incredients: incredients,
  })
  .then((res)=>{console.log(2)
    console.log(res)
    return next()
  })
}


userController.delete = (req, res, next) => {
  const { incredients, username, } = req.body

  User.findOne({username: username})
    .then((user)=>{
      const incObj = user.incredients
      delete incObj[incredients[0]]

      User.updateOne({username: username}, {
        incredients: incObj,
      })
      .catch((err)=>{
        return next({error: 'error in ingredient delete', code: '418'})
      })
    })


  // User.updateOne({username: username}, {
  //   incredients: incredients,
  // })
  return next()
}


module.exports = userController;