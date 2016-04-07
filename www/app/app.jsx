var CloudForm = React.createClass({
  getInitialState: function() {
    return {message: "", helloTo: ""};
  },
  handleChange: function(evt) {
    this.setState({
      helloTo: evt.target.value
    });
  },
  handleClick: function(event) {
      console.log(this.state.helloTo);
  	  var that = this;
      this.setState({message: 'Calling Cloud...'});
      $fh.cloud(
      {
        path: 'hello',
        data: {
          hello: this.state.helloTo
        }
      },
      function (res) {
      	that.setState({message: res.msg});
      },
      function (code, errorprops, params) {
        that.setState({message: ""});
        alert('An error occured: ' + code + ' : ' + errorprops);
      });
  },
  render: function() {
    return (
    <div>
      	<div className="input-div">
	        <input type="text" value={this.state.helloTo} onChange={this.handleChange}  className="input-text" placeholder="Enter Your Name Here."/>
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


