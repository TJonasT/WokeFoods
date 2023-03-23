const path = require('path');
const express = require('express');

const resController = require('./controlllers/recepieController')
const userController = require('./controlllers/userController')

const app = express();
const PORT = 3000;

  
  app.use(express.json());
  app.use('/build', express.static(path.join(__dirname, '../build')));


  app.get('/api/user', userController.findUser, (req, res) =>{
    res.status(201).json(res.locals.incredients)
  })

  app.post('/api/user', userController.createUser,
  (req, res) => {
    res.status(201).json(res.locals.incredients);
  })

  app.put('/api/user', userController.update,
  (req, res) => {
    res.status(201).json("res.locals.incredients");
  })

  

  app.post('/api/recipe', resController.getRecipe,
  (req, res) => { 
    res.status(200).json(res.locals.recipe)
  })

  app.delete('/api/user', userController.delete, (req, res)=>{
    res.sendStatus(201)
  })


  app.get('/', (req, res) => {console.log(2)
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
  

  app.use(({ code, error }, req, res, next) => {
    if(!code){error = 'unknown server err'; code = 418}
    res.status(code).json({ error });
  });
  
  
  app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
