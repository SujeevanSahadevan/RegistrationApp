import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			fullname: "",
			username: "",
			email: "",
			job: "",
			password: "",
		};

		this.changeFullname = this.changeFullname.bind(this);
		this.changeUsername = this.changeUsername.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changeJob = this.changeJob.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	changeFullname(event) {
		this.setState({
			fullname: event.target.value,
		});
	}

	changeUsername(event) {
		this.setState({
			username: event.target.value,
		});
	}

	changeEmail(event) {
		this.setState({
			email: event.target.value,
		});
	}

	changeJob(event) {
		this.setState({
			job: event.target.value,
		});
	}

	changePassword(event) {
		this.setState({
			password: event.target.value,
		});
	}

	submitForm(event) {
		event.preventDefault();
		console.log("submit button clicked");
		const user = {
			fullname: this.state.fullname,
			username: this.state.username,
			email: this.state.email,
			job: this.state.job,
			password: this.state.password,
		};
		console.log("My user obj==",user);

//axios request
axios.post('http://localhost:4000/signin',user)
.then(respose=>console.log("respose.data",respose.data));

alert("Data Successfully Entered!!");

		this.setState({
			fullname: "",
			username: "",
			email: "",
			job: "",
			password: ""
		})
	}

	render() {
		return (
			<div className="login">
				<div className="heading">
					<h2>Register Form</h2>
					<form>
						<div className="input-group input-group-lg">
							<span className="input-group-addon">
								<i className="fa fa-user"></i>
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={this.changeFullname}
								value={this.state.fullname}
							/>
						</div>

						<div className="input-group input-group-lg">
							<span className="input-group-addon">
								<i className="fa fa-lock"></i>
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								onChange={this.changeUsername}
								value={this.state.username}
							/>
						</div>

						<div className="input-group input-group-lg">
							<span className="input-group-addon">
								<i className="fa fa-lock"></i>
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Email"
								onChange={this.changeEmail}
								value={this.state.email}
							/>
						</div>

						<div className="input-group input-group-lg">
							<span className="input-group-addon">
								<i className="fa fa-lock"></i>
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Job"
								onChange={this.changeJob}
								value={this.state.job}
							/>
						</div>

						<div className="input-group input-group-lg">
							<span className="input-group-addon">
								<i className="fa fa-lock"></i>
							</span>
							<input
								type="password"
								className="form-control"
								placeholder="Password"
								onChange={this.changePassword}
								value={this.state.password}
							/>
						</div>

						<button type="submit" onClick={this.submitForm} className="float">
							Register
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default App;
