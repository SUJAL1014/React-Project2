//Lets create the component
import { B } from "./B";

let A = props => {
    console.log(props);
    let data1 = 'data1';
    return (
      <>
        <div>Parent {data1}{props.children} {props.name} {props.surname}
          <div>Children</div>
        </div> 
        <B data3={props.name} ></B>
      </>
    )
}
export default A;