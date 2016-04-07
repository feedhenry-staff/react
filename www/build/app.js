"use strict";

var CloudForm = React.createClass({
  displayName: "CloudForm",

  getInitialState: function getInitialState() {
    return { message: "", helloTo: "" };
  },
  handleChange: function handleChange(evt) {
    this.setState({
      helloTo: evt.target.value
    });
  },
  handleClick: function handleClick(event) {
    var that = this;
    this.setState({ message: 'Calling Cloud...' });
    $fh.cloud({
      path: 'hello',
      data: {
        hello: this.state.helloTo
      }
    }, function (res) {
      that.setState({ message: res.msg });
    }, function (code, errorprops, params) {
      that.setState({ message: "" });
      alert('An error occured: ' + code + ' : ' + errorprops);
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "input-div" },
        React.createElement("input", { type: "text", value: this.state.helloTo, onChange: this.handleChange, className: "input-text", placeholder: "Enter Your Name Here." })
      ),
      React.createElement(
        "button",
        { onClick: this.handleClick, type: "button", className: "say-hello-button" },
        "Say Hello From The Cloud"
      ),
      React.createElement(
        "div",
        { id: "cloudResponse", className: "cloudResponse" },
        this.state.message
      )
    );
  }
});
ReactDOM.render(React.createElement(CloudForm, null), document.getElementById('content'));
