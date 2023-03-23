import React, { Component } from 'react';
import Homepage from './components/homepage';
import Welcome from './components/page1/welcome.js';
import Choose from './components/page2/choose.js';
import Here from './components/page3/here';
import Ingredient from './components/page2/ingredient';
import RecipeCard from './components/page3/recipeCard'


class Switch extends Component{
  constructor() {
    super();
    this.updateIncredient = this.updateIncredient.bind(this)
    this.signin = this.signin.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.addIncredient = this.addIncredient.bind(this);
    this.getRecipe = this.getRecipe.bind(this);

    this.state = {
      recipes: null,
      incredients: null,
      username: null,
     render: <Welcome create={this.renderSwitch} signin={this.signin} />,
     //render: <Here/>,
      boxes: [<Ingredient value={"el"}/>]
    }
  };

  updateIncredient(input){
    const objIn = this.state.incredients;
    if(input[1]==="red")objIn[input[0]] = "green";
    if(input[1]==="green")objIn[input[0]] = "red";



    this.setState({incredients: objIn})
    console.log(this.state.incredients)
  }


  addIncredient(input){
    const obj = this.state.incredients;
    if(input){
      obj[input] = "red";
      this.setState({incredients: obj})

      fetch(`/api/user?username=${this.state.username}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({incredients: this.state.incredients})
      })

    }
  }


  getRecipe(){

    let str = "";
    for(let el in this.state.incredients){
      if(this.state.incredients[el] === "green") str += `${el} `
    }
    
    fetch('/api/recipe', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({q: str})
    })
    .then((res) => res.json())
    .then(result => {
      console.log(result)
      console.log("---")
      this.setState({recipes: result})
      this.setState({render: <Here state={this.state}/>})
    })
    //  .catch((err)=>console.log(err));



  }




  signin(input){
    fetch(`/api/user?username=${input}`)
      .then((res) => res.json())
      .then(result => {
        if(result.error) return;
        this.setState({incredients: result, username: input})
        this.setState({ render: <Choose updateIncredient={this.updateIncredient} state={this.state} addIncredient={this.addIncredient} getRecipe={this.getRecipe}/>})
      })
    document.querySelector('#idField1').value = "";
  }
  
  renderSwitch(input){

    // fetch('/api/user',{
    //   method: "POST",
    //    headers: {'Content-Type': 'application/json'},
    //    body: JSON.stringify({username: "input"})
    // }
    // )

    fetch('/api/user', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: input})
    })
    .then((res) => res.json())
    .then(result => {console.log("result")
      if(result.error) return false;

      this.setState({incredients: result, username: input})
      this.setState({ render: <Choose updateIncredient={this.updateIncredient} state={this.state} addIncredient={this.addIncredient} getRecipe={this.getRecipe} />})
    });
    document.querySelector('#idField2').value = ""
  }

  render(){

    return(
      <div>
        {this.state.render}
      </div>
    )
  }
}

export default Switch;