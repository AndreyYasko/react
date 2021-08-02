
import { createElement, Component } from "react";
import "./app.css";
import styles from "./app.module.css";

export function App(props) {
  // console.log(props);
  return (
    <div className={styles.app} style={{ border: "1px solid red"}}>
      <header onClick ={props.handleClick} className="App-header">hello function name: {props.user.name}</header>
    </div>
  );
}

export const AppWithoutJSX = () => createElement(
  "div", { className: "App"}, createElement("header", {className: "App-header" }, "hello function AppWithoutJSX")
);


export class AppClass extends Component {
  render() {
    return (
      <div className="App" >
        <header onClick={this.props.handleClick} className="App-header">hello class name:   {this.props.user.name}</header>
      </div>
    );
  }
}
//export default App;
