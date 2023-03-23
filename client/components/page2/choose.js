import React, { Component } from 'react';
import Ingredient from './ingredient';


  class Choose extends Component {
    constructor(props) {
      super(props);
      this.change = this.change.bind(this);
      this.state = {
        boxes: [<Ingredient value={"el"}/>]
      }
    }

    change(){
      const array = [];
      for(let el in this.props.state.incredients){
        array.push([<Ingredient value={el}/>])
      }
     this.setState({boxes: array});
    }

  

    render(){
      console.log(this.props)
      const arr = [<Ingredient value="hifddt"/>]
      return (
        <div id="choose">
          <div id='addIncredients'>
            
             <input id="chooseField" type="search" onChange={this.props.addIncredient()}></input>

             <button id="chooseButton" onClick={()=>{
              this.props.addIncredient(document.querySelector('#chooseField').value)
              document.querySelector('#chooseField').value = ""
              this.change()
              }}>add</button>

          </div>

          <div id='incredients'>
            <div id="recipeFinderDiv">
            <div id="recipeFinder">

              <button className="recipeButton" onClick={()=>this.change()}>load incredients!</button>
              <button className="recipeButton" onClick={()=>this.props.getRecipe()}>generate recipes!</button>

            </div>
            </div>

            {this.state.boxes}
          </div>
        </div>
      )
    }

  }

  export default Choose;



  