import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { incrementAction } from "./actions/increment";
import { decrementAction } from './actions/decrement'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="block">
            <p>Balance Amount : {this.props.balance_amount}</p>
            <button className="" onClick={this.props.incrAction}>Increment</button>
            <button onClick={this.props.decrAction} className={this.props.balance_amount ? "" : "btn-disable"}>Decrement</button>
          </div>
        </header>
      </div>
    );
  }
}

//const mapStateToProps = state => ({ balance_amount: state.balance_amount });
//or
const mapStateToProps = state => {
  console.log("mapStateToProps : " + JSON.stringify(state));
  return { ...state };
}
//or
//const mapStateToProps = state => ({ ...state});

// const mapDispatchToProps = dispatch => ({
//   incrAction: () => dispatch(incrementAction),
//   decrAction: () => dispatch(decrementAction)
// });
//or
const mapDispatchToProps = dispatch => {
  console.log("mapDispatchToProps "+dispatch);
  return {
    incrAction: () => dispatch(incrementAction),
    decrAction: () => dispatch(decrementAction)
  }
};

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
