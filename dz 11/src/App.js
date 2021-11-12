import './App.css';
import React from 'react';
import App2 from './App2';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      s1: 999999999,
      s2: 888888888,
      s3: '',

    }
  }

  static getDerivedStateFromProps(props, state) {
    return{
      s1: props.testProps.a1,
      s2: props.testProps.a2,
      s3: props.testProps.a1 * props.testProps.a2,
    }
  }

  render() {
    let newProps = this.state.s3
    return (
      <div>
        <div>
          {`Task 1`}<br/>
          {this.props.testProps.a1}<br/>
          {this.props.testProps.a2}
        </div>
        <div>
          {`Task 2`}<br/>
          {this.state.s1}<br/>
          {this.state.s2}
        </div>
        <div>
          {`Task 3`}<br/>
          {this.state.s3}
        </div>
        <App2 z1={newProps}/>
      </div>
    );
  }
}



export default App;
