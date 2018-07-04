import React from "react";

class Button extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>;
  }
}

export default Button;
