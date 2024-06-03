import React from "react";
import C from "./C";

//Lets define another component
export class B extends React.Component {
    //properties
  
  
    //constructor
  
  
    //methods
    render() {
       
      return (
      <>
      <div>DedaniayINFOTECH {this.props.data3}</div>
      <C data4={this.props.data3}></C>
      </> 
      );
    }
  }