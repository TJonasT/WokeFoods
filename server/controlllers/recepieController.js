
const recController = {};

  recController.getRecipe = ((req, res, next) => {
    let { q } = req.body

console.log(q)

    if(!q) next({error: 'recepie error q not defined', code: '418'})

    const url = ``
    fetch (url)
    .then((response) => response.json())
    .then((data) => {
        res.locals.recipe = data.hits
      return next()
    })
    .catch((err) => {return next({error: 'fetch request error', code: '418'})});
  });

module.exports = recController;
