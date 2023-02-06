import React from "react";


const Login = () => {

	return (
    <div>
	    <div className="container">
            <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Email</label>
            <input type="email"
            className="form-control" 
            id="email-input" 
            placeholder="Ingrese su email" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">
                Password</label>
            <input type="email"
            className="form-control" 
            id="password-input" />
            </div>
            <button type="button" 
            class="btn btn-primary">
                Submit</button>
        </div>
    </div>
	);
};

export default Login;
