import React, { Component } from 'react';


  class Ingredient extends Component {
    constructor(props) {
      super(props);
    }

    render(){

      return (
        <div className='ingredient'>
          {this.props.value}
        </div>
      )
    }

  }

  export default Ingredient;