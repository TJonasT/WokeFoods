import React, { Component } from 'react';


  class Welcome extends Component {
    constructor(props) {
      super(props);
    
    }

    render(){

      return (
        <div id="login" > 
          <h1 id= "loginheader">Woke foods</h1>

          <div id = "box">
            <div className='innerBox'>
             <input id="idField1" className="field1" type="search" onChange={()=>console.log(2)} ></input>
             <button className="button1" onClick={()=>this.props.signin(document.querySelector('#idField1').value)}>login</button>
            </div>

            <div className='innerBox'>
             <input id="idField2" className="field1" type="search" onChange={()=>console.log(2)} ></input>
             <button className="button1" onClick={()=>this.props.create(document.querySelector('#idField2').value)}>signup</button>
            </div>
          </div>
        </div>
      )
    }

  }

  export default Welcome;



  