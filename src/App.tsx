import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  var data={ToDo: state.ToDo}
  return data;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // ageUp: () => dispatch(ageUp()),
    // ageDown: () => dispatch({ type: "AGE_DOWN" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);