import React, { Component } from 'react';
import RecipeCard from './recipeCard';


class Here extends Component {
  constructor(props) {
    super(props);
    
  }

  render(){
      const arr = []
    
     const recipes = this.props.state.recipes;
     recipes.forEach((element, index) => {
      arr.push(<RecipeCard
          list = {element.recipe.ingredientLines}
          cuisineType = {element.recipe.cuisineType[0]}
          mealType = {element.recipe.mealType[0]}
          label = {element.recipe.label}
          link = {element.recipe.url}
          img = {element.recipe.images.SMALL.url}
         />)
     });
     console.log(arr)
    
    //  for(let i=0; i<6; i++){
    //   arr.push(<RecipeCard
    //           label = "Rice Noodles With Sundried Tomatoes, Parmesan & Basil"
    //           link = "https://www.epicurious.com/recipes/food/views/mediterranean-rice-noodles-56389410"
    //           img = "https://edamam-product-images.s3.amazonaws.com/web-img/5af/5af4931d106394b81a9bc37ea3ac6c78-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC5UQu3%2BUnpgJbNSg7yepaWw71Q%2FelHUn7BvpxB5rDgrAiAYSxzL4fC59WUKGhN1PAY5yNJGz0R2uniDpmmQlvWsKyrCBQjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMw%2FmOwR4FOhnI7FgCKpYFcx3E26evCtqmaG%2B0tSJDfTdWZQqOGBWZ%2BnuUjh5z%2Fy1drJ2Cb6SLs0a10%2FUvY2Dz5Yw7cxQM9EpCGgEjkDM1PC3yYZATcDgF60Rb6GeHau4cbJFBksr%2FZ264MJasnrrnwJF72Ig3oQw3NWR06iSrxFPZjiaSOJhnigOKgmBZxTNIX98fQrcOpUFjhremX7bvUXiSVkLCjAmI2iL65xPqZ2H9hsIrkxsSMhNfn7A7dM8737OucXcr%2BHgVCYmlHEiU3mUcS8pbAdVN4cRpdHr7T%2BNF%2FQQiisZLfA4IkRkjm4eBXKB59eMRyzacz97ay2DlqgngwA5Nb6rjxjxFGVvr%2FmVsnZPfEYfmirrmDIc14yK2FyDnhHH2vU1nJmFf7QkoMJDGvmg5zy7yEDb1tzbonzLfsrOzxXDK9Bpr0LP%2F09ec%2FtTOoMrnv8TEzi0wBhAJ432%2Bge5UDfqbpeL%2FyKoVXzItocd%2FXi6U21HVQlx%2FA8Nsr9cLnBrA6BCdf3J%2BxXs5X8o%2B6F6vQ55LAyzn%2BKP7HI6WDXrUOjvLjuj6ElCsA7jtUXix57m2ETaSIPDzNeEzVaNunNiq05HhHyFGgNkuupKtuYGfOhUtjd4h58k60mWnHTX%2BiEeDtmtJs%2BsN9rtdwBx%2FSxJ9i0NODb5m0sTMzMhbaA%2F06KKTXy590h%2F0zeoK%2FRBMClcisL7yJbSt30oTI05Rg2Cc9fAngrWoUpGhgUvWmInoT6ZxhhtNNg52hKB3RJRFo87vEPi3FSvNdbJodCH5emTCdX5GiCSG6QzieWCIYMGG%2BB3xd4gJdrg9BgMc35z5%2FVLvf0SeSoEwOIx%2FLbViQHuRuLUakH36wUkHsp5fV22iBKhnVEKx3JGJLv%2Fc4uXlJx0w0%2BLxoAY6sgF0kvNAWwcpNf8rwHPCvJCL3u7CvFsZOw5n%2BLXf54n631lY98glayh34l1YAq44ETMr7sd%2BSEjLFgSCUfjtaJh2o1T72CJrjV1lR%2BRYyhzYkQao556dGn%2B0QSP49Ndzc09zVMOW%2FQguYg%2FyGvi3axErjYD2gpOkmjFbK62NAsVQf0Z7bHeeqXvsKUIONHUjtS%2BPanJS1We8FSIxwb73u7kDsp8MrPtzZm4DUPXUDwl%2FisO%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230323T162333Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFA2SAS3GR%2F20230323%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=03b5182da9b972d7c33352b9b6778c3052664fdc060d4c052c7848b7d7e5c5e2"
    //          />)
    //   }

     return (
      <div id='cardPage'>
        <div id = 'cardFeed'>
          {arr}
        </div>
      </div>
    )
  }

}

  export default Here;



  