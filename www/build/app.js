'use strict';

var CloudForm = React.createClass({
  displayName: 'CloudForm',

  getInitialState: function getInitialState() {
    return { message: "" };
  },
  handleClick: function handleClick(event) {
    var that = this;
    this.setState({ message: 'Calling Cloud...' });
    $fh.cloud({
      path: 'hello',
      data: {
        hello: this.helloTo.value
      }
    }, function (res) {
      that.setState({ message: res.msg });
    }, function (code, errorprops, params) {
      alert('An error occured: ' + code + ' : ' + errorprops);
    });
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'input-div' },
        React.createElement('input', { id: 'hello_to', type: 'text', ref: function ref(_ref) {
            return _this.helloTo = _ref;
          }, className: 'input-text', placeholder: 'Enter Your Name Here.' })
      ),
      React.createElement(
        'button',
        { onClick: this.handleClick, type: 'button', className: 'say-hello-button' },
        'Say Hello From The Cloud'
      ),
      React.createElement(
        'div',
        { id: 'cloudResponse', className: 'cloudResponse' },
        this.state.message
      )
    );
  }
});

ReactDOM.render(React.createElement(CloudForm, null), document.getElementById('content'));
