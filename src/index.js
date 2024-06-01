//Import Area
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


//You can define react componet using 2 Techniques
//1 Function Component
function A(props){//we will recive a formal arguments
  let name="Sujal";//Data is availbe within the component
  //Every function return something
  let sn2="Torecha"
  return <h1> A {name} {props.surname} - <B surname={sn2}/></h1>
}


//2 Class Component
//Class Child Extends Parents()
class B extends React.Component{//OOPS
  //Properties
  name="Puspendra"

  //Constructor

  //Meathod
  //In order to acces any member of the class u have to use THIS keywoerd
  render(){
    return <span>B - {this.name} {this.props.surname} <C>Sharma</C></span>
  }
}


//ES6 2015 FAT ARROW FUNCTIOM

let C = (props)=>{
  let name = "Vishnu"
  console.log("hi",props.children)
  return <span>C - {name} {props.children} </span>
}







const root = ReactDOM.createRoot(document.getElementById('root'));
let sn1="Dedaniya"
root.render(<A surname={sn1}/>);

