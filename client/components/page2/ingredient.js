import React, { Component } from 'react';


  class Ingredient extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      return (
        <div>
          <button className='deleteButton' onClick={()=>{this.props.delete(this.props.value)
          this.props.change()}}>X</button>

          <button value = {this.props.value} style={{color: this.props.value[1]}} className='ingredient' onClick={()=>{this.props.updateIncredient(this.props.value)
          this.props.change()}}>
            {this.props.value[0]}
          </button>
        </div>
      )
    }

  }

  export default Ingredient;