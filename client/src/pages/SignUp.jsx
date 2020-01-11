import React, { Component } from "react";
import api from '../api/adminApi';

 class SignUp extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword : '',
            errors: {},

        }
    }
    handleChangeFirstName = async(event)=>{
        const firstName = event.target.value;
        this.setState({firstName})
    }
    handleChangeLastName = async(event)=>{
        const lastName = event.target.value;
        this.setState({lastName})
    }
    handleChangeEmail = async(event)=>{
        const email = event.target.value;
        this.setState({email})
    }
    handleChangeUserName = async(event)=>{
        const username = event.target.value;
        this.setState({username})
    }
    handleChangePassword = async(event)=>{
        const password = event.target.value;
        this.setState({password})
    }
    handleChangeConfirmPassword = async(event)=>{
        const confirmPassword = event.target.value;
        this.setState({confirmPassword})
    }
    handleIncludeAdmin = async(event) =>{
        event.preventDefault();
        const {firstName,lastName,email,username,password,confirmPassword} = this.state;
        if (password===confirmPassword) {
            const payload = {firstName,lastName,email,username,password};
            await api.signup(payload).then((res)=>{
            console.log(res);
            if(res.data.success===false)
            window.alert('Sign up failed');
            //else if(!res) window.alert("sign up success");
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                })
            })
        }
        
    }
    render() {
        const {firstName,lastName,email,username,password,confirmPassword,errors} = this.state;
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" required className="form-control" placeholder="First name" value={firstName} 
                        onChange = {this.handleChangeFirstName}
                        error={errors.firstName}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" value={lastName} 
                        onChange = {this.handleChangeLastName}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" required className="form-control" placeholder="Enter email" value={email} 
                        onChange = {this.handleChangeEmail}
                        error = {errors.email}
                    />
                </div>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="text" required className="form-control" placeholder="Enter UserName" value={username} 
                        onChange = {this.handleChangeUserName}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" required className="form-control" placeholder="Enter password" value={password} 
                        onChange = {this.handleChangePassword}
                        error = {errors.password}
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" required className="form-control" placeholder="confirm password" value={confirmPassword}
                        onChange = {this.handleChangeConfirmPassword}
                    ></input>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleIncludeAdmin}>
                    Sign Up
                </button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}
export default SignUp