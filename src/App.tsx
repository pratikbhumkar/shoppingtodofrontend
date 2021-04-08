import './App.css';
import { connect } from "react-redux";
import ListItem from "./components/ListItem";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <input style={{ width: '18rem', height: '3rem', fontSize: 18, flexDirection: 'row-reverse' }}></input>
        <ListItem />
        <ListItem />
        <hr style={{ width: '80%', marginTop: 30 }} />
        <s>
          <ListItem />
        </s>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  var data = { ToDo: state.ToDo }
  return data;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // ageUp: () => dispatch(ageUp()),
    // ageDown: () => dispatch({ type: "AGE_DOWN" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);