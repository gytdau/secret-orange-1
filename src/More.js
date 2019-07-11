import React, { Component } from 'react';

class More extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shown: false
    }
  }
  switch() {
    this.setState({
      shown: true
    })
  }
  render() {
    if (!this.state.shown) {
      return <span className="more" onClick={this.switch.bind(this)}>···</span>;
    } else {
      return <span>{this.props.children}</span>;
    }
  }
}

export default More; // Don’t forget to use export default!