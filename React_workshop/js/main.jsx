import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from "./components/SearchBar.jsx";
import {CatTable} from "./components/CatTable.jsx";
import {CatRow} from "./components/CatRow.jsx";

const cats = [
 {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
 {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
 {category: "male", age: "2", likesKids: false, name: "Grumpy"},
 {category: "male", age: "7", likesKids: true, name: "Cat"},
 {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
 {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
 {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"},
 {category: "female", age: "1.5", likesKids: false, name: "Kitty"}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: this.props.cats,
      searchLikeKids: false,
      searchInputValue: ""
    }
  }

  changeLikeKids =(isLike)=> {
    this.setState({ searchLikeKids: isLike });
  }

  changeInput =(inputValue)=> { this.setState({searchInputValue: inputValue}); }

  render() {
    return (
      <div className="main-container">
        <SearchBar callback={this.changeLikeKids} callbackInput={this.changeInput}/>
        <CatTable cats={this.state.cats} showLikeKids={this.state.searchLikeKids} searchInputValue={this.state.searchInputValue}/>
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
      <App cats={cats}/>,
      document.getElementById('app')
    );
});
