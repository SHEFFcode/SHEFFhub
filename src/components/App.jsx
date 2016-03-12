import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './sheffhub/Profile.jsx';

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

	//get user data from github

	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userData: data});
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	componentDidMount() {
		this.getUserData();
	}

	render(){
		return (
			<div>
				<Profile userData = {this.state.userData}/>
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