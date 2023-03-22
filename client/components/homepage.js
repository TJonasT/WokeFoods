import React, { Component } from 'react';


  class Homepage extends Component {
    constructor(props) {
      super(props);
      this.gibRezept = this.gibRezept.bind(this);
      this.state = {
        value: "",
        recipe: ""
      }
    
    }
    // componentDidMount(){

    //   console.log(2)
    // }
    // componentDidUpdate(){
    //   console.log(22)

    // }

    gibRezept(){
      console.log(this.state.value)
     //this.setState({value: "h"})
      fetch('/api/recipe', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({q: this.state.value})
      })
      .then((res) => res.json())
      .then(result => {
        const array = [];
        result.forEach(element => {
          array.push(element.recipe.label + "/ ")
        });
        
        this.setState({recipe: array})}
      )
      .catch((err)=>console.log(err));
      
      document.querySelector('#field').value = ""
    }


    render(){
      let red = 2;

      return (
        <div>

        <input id="field" type="search" onChange={input => this.setState({value: input.target.value})} ></input>

        <button id="someId" onClick={() => {this.setState({value: "h"})
        this.gibRezept()}}> gib Rezept</button>

        <p value = "hi ">{this.state.recipe}</p>
        </div>
      )
    }

  }

  export default Homepage;



  