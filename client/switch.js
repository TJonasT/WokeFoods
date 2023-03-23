import React, { Component } from 'react';
import Homepage from './components/homepage';
import Welcome from './components/page1/welcome.js';
import Choose from './components/page2/choose.js';
import Here from './components/page3/here';
import Ingredient from './components/page2/ingredient';


class Switch extends Component{
  constructor() {
    super();
    this.signin = this.signin.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.addIncredient = this.addIncredient.bind(this);
    this.getRecipe = this.getRecipe.bind(this);

    this.state = {
      switch: true,
      recipe: null,
      incredients: null,
      username: null,
      render: <Welcome create={this.renderSwitch} signin={this.signin} />,
      boxes: [<Ingredient value={"el"}/>]
    }
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
    console.log("here")
  }




  signin(input){
    fetch(`/api/user?username=${input}`)
      .then((res) => res.json())
      .then(result => {
        if(result.error) return;
        this.setState({incredients: result, username: input})
        this.setState({ render: <Choose state={this.state} addIncredient={this.addIncredient} getRecipe={this.getRecipe}/>})
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
      this.setState({ render: <Choose state={this.state} addIncredient={this.addIncredient} getRecipe={this.getRecipe} />})
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