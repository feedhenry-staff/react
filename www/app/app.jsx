var CloudForm = React.createClass({
  getInitialState: function() {
    return {message: ""};
  },
  handleClick: function(event) {
  	  var that = this;
      $fh.cloud(
      {
        path: 'hello',
        data: {
          hello: document.getElementById('hello_to').value
        }
      },
      function (res) {
      	that.setState({message: res.msg});
        console.log(res.msg);
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
  },
  render: function() {
    return (
    <div>
      	<div className="input-div">
	        <input id="hello_to" type="text" className="input-text" placeholder="Enter Your Name Here."/>
	    </div>
	    <button onClick={this.handleClick} type="button" className="say-hello-button">Say Hello From The Cloud</button>
	    <div id="cloudResponse" className="cloudResponse">{this.state.message}</div>	
    </div>
    );
  }
});

ReactDOM.render(
  <CloudForm/>,
  document.getElementById('content')
);


