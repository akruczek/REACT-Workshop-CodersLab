import React from 'react';
import ReactDOM from 'react-dom';

const url = "http://localhost:3000/cars/";

const buttonStyle = {
  marginLeft: "20px",
  border: "2px solid blue",
  borderRadius: "30px"
}

const h2Style = {
  display: "inline",
  fontFamily: "sans-serif"
}

class Car extends React.Component {

  removeCar (id) {
    console.log(id);
    fetch(`${url}${id}`, {
      method: "DELETE"
    });
  }

  render() {
    console.log(this.props.car);
    return (
      <li>
        <h2 style={h2Style}>{this.props.car.brand} {this.props.car.name}</h2>
        <button style={buttonStyle} onClick={this.removeCar(this.props.car.id)}>Sprzedany</button>
        <br/><br/>
      </li>
    );
  }
}

class CarsDbManager extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      cars: []
    }

    this.getData();
  }

  getData =()=> {
    fetch(url).then(response => {
      return response.json();
    }).then(cars => this.setState({cars}));
    // [!]---{cars: cars} <=> {cars}---[!]
  }

  render() {
    console.log(this.state.cars);
    return (this.state.cars.length > 0) ? (
      <ul>
        {this.state.cars.map(item => <Car key={item.id} car={item} callback={this.removeCar}/>)}
      </ul>
    ) : (
      <h1>Loading data...</h1>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
      <CarsDbManager />,
      document.getElementById('app')
    );
});
