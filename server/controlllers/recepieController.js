
const recController = {};

  recController.getRecipe = ((req, res, next) => {
    let { q } = req.body

console.log(q)

    if(!q) next({error: 'recepie error q not defined', code: '418'})

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=330b0a82&app_key=700c671dd4251b92ff2ea1143faf2839%09&`
    fetch (url)
    .then((response) => response.json())
    .then((data) => {
        res.locals.recipe = data.hits
      return next()
    })
    .catch((err) => {return next({error: 'fetch request error', code: '418'})});
  });

module.exports = recController;