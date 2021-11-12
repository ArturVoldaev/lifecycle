import React from 'react';

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      y1: '',

    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      y1: props.z1 * 10,
    }
  }

  render() {
    return (
      <div>
        <div>
          {`Task 4`}<br/>
          {this.props.z1}
        </div>
        <div>
          {`Task 5`}<br/>
          {this.state.y1}
        </div>
      </div>
    );
  }
}



export default App2;