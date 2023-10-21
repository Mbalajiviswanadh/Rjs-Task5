import { Component } from "react";
import "./style.css";


export class Agefinder extends Component {
  constructor(props) {
    super(props);
    this.state = { age: null };
  }

  handleClick = () => {
    const d = document.getElementById("date").value;
    let today=new Date();
      const currYear=today.getFullYear();
      const currdate=today.getDate();
      const currMonth=today.getMonth()+1;
      const arr=d.split("-");
      const year=arr[0];
      const mont=arr[1];
      const date=arr[2];
      let dob=(365*(currYear-year)+30*(currMonth-mont)+(currdate-date))/365;
 
 

    if (dob < 0) {
      this.setState({
        age: <p>Please enter a valid date of birth</p>
      });
    } else {
      this.setState({
        age: <p>You are   <span style={{color:'red',}}>{parseInt(dob)} </span>  Years old</p>
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <input type="date" id="date"></input>
        <br />
        <button onClick={this.handleClick} id="b1">
          Calculate Age
        </button>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}

export default Agefinder;