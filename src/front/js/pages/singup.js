import React from "react";
import CONFIG from "../store/config.js";


const Singup = () => {

    const onSingup = async () => {
        const email = document.getElementById('email-input').value;
        const pass= document.getElementById('password').value;
        const repeatPass = document.getElementById('repeat-password').value;

        if  (pass.length < 4) {
            alert('La contraseña debe ser mayor a 4 digitos')
            return;
        }
        if (pass !== repeatPass) {
            alert("La contraseña no coincide")
            return;
        }

        const body = JSON.stringify({
            email,
            password: pass,
        })

        const res = await fetch(`${CONFIG.HOSTNAME}/api/singup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });

        const data = await res.json()

        if(res.status !== 201) {
            alert(data.msg);
            return;
        }

       console.log('El ususario se creo correctamente!!')
    };

	return (
		<div>
            <div className="container">
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Email</label>
            <input type="email"
            className="form-control" 
            id="email-input" 
            placeholder="Ingrese su email" />
            </div>
            <div className="mb-3">
            <label htmlFor="password-input" className="form-label">
                Password</label>
            <input type="email"
            className="form-control" 
            id="password" />
            </div>
            <div className="mb-3">
            <label htmlFor="password-input-repeat" className="form-label">
                Repeat Password</label>
            <input type="email"
            className="form-control" 
            id="repeat-password" />
            </div>
            <button type="button" 
            className="btn btn-primary" onClick={onSingup}>
                Submit</button>
        </div>
        </div>
	);
};

export default Singup;
