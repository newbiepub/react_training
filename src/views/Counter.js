import React from "react";
import { connect } from "react-redux";

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}

Counter.defaultProps = {
  value: 0
};

const mapStateToProps = state => {
  return {
    value: state.counter.value
  };
};

export default connect(mapStateToProps)(Counter);
