import React, { Component } from 'react';


  class RecipeCard extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      const list = []
      this.props.list.forEach((element, index) => {
        if(index < 9) {
          list.push(<li>{element}</li>)
        };
      });

      return (
      <div className='recipeCard'>
        <div className='upper'>
        <img className="pic" src={this.props.img}></img>

          <div className='upperRight'>
            <div className='label' >{this.props.label}</div>
            <div className='list'>
              <li>{this.props.cuisineType}</li>
              <li>{this.props.mealType}</li>
            </div>
            <div className='linkDiv'> To get to recipe click 
              <a className='link' href={this.props.link}> here!</a>
            </div>
          </div>
        </div>

        <div id='incs'>
          <li>hand full of dried tomatoes</li>
          {list}
        </div>
      </div>
      )
    }
  }

  export default RecipeCard;