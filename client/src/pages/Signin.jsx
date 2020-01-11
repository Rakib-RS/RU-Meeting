import React, { Component } from "react";
import apis from "../api/adminApi";

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
        }
    }
    handleChangeEmail = async (event)=>{
        const email = event.target.value;
        this.setState({email});
    }
    handleChangePassword = async (event)=>{
        const password = event.target.value;
        this.setState({password});
    }
    handleSignin = async (event)=>{
        event.preventDefault()
        const {email,password} = this.state;
        const payload = {email,password};
        
        await apis.signin(payload).then((res)=>{
            //console.log(res);
            const status = res.data.data;
            console.log(status);
            console.log(res);
            if(status!==true){
              return  window.alert(status);
            }
            
            window.location.href="/home"
        })
    }     

    render() {
        const {email,password,errors} = this.state;
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required value={email}
                        onChange = {this.handleChangeEmail}
                        error = {errors.email}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                        required value= {password} onChange = {this.handleChangePassword}
                        error = {errors.password}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick= {this.handleSignin}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/sign-in">password?</a>
                </p>
            </form>
        );
    }
}
export default Signin;