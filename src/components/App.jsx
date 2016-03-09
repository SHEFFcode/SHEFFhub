import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: 'SHEFFcode',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}


	render(){
		return (
			<div>
				{this.state.username}
			</div>
		)
	};
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: 'dd02448d317fb0fb9556',
	clientSecret: '25b4e93ed92455f5088f8de985b360239dac741e'
}

export default App;