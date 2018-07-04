import React from "react";
import Button from "../components/Button";
import { connect } from "react-redux";
import { plus, minus } from "../actions";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handlePlus() {
    plus();
  }

  handleMinus() {
    minus();
  }

  render() {
    return (
      <div style={{ height: 100, width: 200, background: "#e5e5e5" }}>
        <Button onClick={this.handlePlus} label={"+"} />
        <p>{this.props.value}</p>
        <Button onClick={this.handleMinus} label={"-"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.counter.value
  };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(Home);
