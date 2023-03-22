const path = require('path');
const express = require('express');

const resController = require('./controlllers/recepieController')

const app = express();
const PORT = 3000;

  
  app.use(express.json());
  app.use('/build', express.static(path.join(__dirname, '../build')));


  app.post('/api/recipe', resController.getRecipe,
  (req, res) => { 
    res.status(200).json(res.locals.recipe)
  })

  
  // app.get('/api/recipe', (req, res) => {
  //   console.log("-----------here----------")
  //   return res.status(201).json("recipe");
  // });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });

  app.use(({ code, error }, req, res, next) => {
    if(!code){error = 'unknown server err'; code = 418}
    res.status(code).json({ error });
  });

