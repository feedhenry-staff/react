'use strict';

var CloudForm = React.createClass({
  displayName: 'CloudForm',

  getInitialState: function getInitialState() {
    return { message: "" };
  },
  handleClick: function handleClick(event) {
    var that = this;
    $fh.cloud({
      path: 'hello',
      data: {
        hello: document.getElementById('hello_to').value
      }
    }, function (res) {
      that.setState({ message: res.msg });
      console.log(res.msg);
    }, function (code, errorprops, params) {
      alert('An error occured: ' + code + ' : ' + errorprops);
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'input-div' },
        React.createElement('input', { id: 'hello_to', type: 'text', className: 'input-text', placeholder: 'Enter Your Name Here.' })
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
