import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './sheffhub/Profile.jsx';
import Search from './sheffhub/Search.jsx';

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

	//get user repos from github
	getUserRepos() {
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page='+this.state.perPage+'&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({userRepos: data});
			}.bind(this),
			error: function(xhr, status, err) {
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	//handleFormSubmit funciton
	handleFormSubmit(username) {
		this.setState({
			username: username
		}, function() {
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	render(){
		return (
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
				<br/>
				<Profile {...this.state}/>
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