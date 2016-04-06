var CloudForm = React.createClass({
  getInitialState: function() {
    return {message: ""};
  },
  handleClick: function(event) {
  	  var that = this;
      this.setState({message: 'Calling Cloud...'});
      $fh.cloud(
      {
        path: 'hello',
        data: {
          hello: this.helloTo.value
        }
      },
      function (res) {
      	that.setState({message: res.msg});
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      });
  },
  render: function() {
    return (
    <div>
      	<div className="input-div">
	        <input id="hello_to" type="text" ref={(ref) => this.helloTo = ref}  className="input-text" placeholder="Enter Your Name Here."/>
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


