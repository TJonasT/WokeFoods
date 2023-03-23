import React, { Component } from 'react';


  class Ingredient extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      return (
        <button value = {this.props.value} style={{color: this.props.value[1]}} className='ingredient' onClick={()=>{this.props.updateIncredient(this.props.value)
        this.props.change()}}>
          {this.props.value[0]}
        </button>
      )
    }

  }

  export default Ingredient;