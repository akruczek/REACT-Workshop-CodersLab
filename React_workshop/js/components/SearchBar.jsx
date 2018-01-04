import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      checkboxValue: "",
    }
  }

  changeHandler =(event)=> {
    this.setState({ [event.target.name]: event.target.value }, () => {
      this.props.callbackInput(this.state.inputValue);
    });
  }

  changeCheckbox =(event)=> {
    this.setState({ [event.target.name]: event.target.checked }, () => {
      this.props.callback(this.state.checkboxValue);
    });
  }

  render() {
    return (
      <form className="main-form">
        <input className="input-search-cats" onChange={this.changeHandler} name="inputValue" value={this.state.inputValue} type="text" placeholder="Szukaj kotów..."/>
        <br/><br/>
        <input onChange={this.changeCheckbox} name="checkboxValue" checked={this.state.checkboxValue} type="checkbox"/>Pokaż tylko koty, które lubią dzieci
      </form>
    );
  }
}
