import React, { Component } from 'react';
import './App.css';
import KeyPad from './components/Keypad';
import Output from './components/output';


class App extends Component {
  state = {
    result: ''
  }

  buttonPress = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "clear") {
      this.reset()
    } else {
      this.setState({
        result: this.state.result + buttonName
      });
    }
  };

  reset = () => {
    this.setState({
      result: ''
    });
  };

  calculate = () => {
    this.setState({
      // eslint-disable-next-line no-eval
      result: eval(this.state.result)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="calculator">


          <Output result={this.state.result} />
          <KeyPad buttonPress={this.buttonPress} />
        </div>
      </div>
    );
  }
}
export default App;