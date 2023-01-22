import { useState } from "react";
import React from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const payload = {
            email,
            password
        }

        fetch(`https://rich-red-indri-tie.cyclic.app/users/login`,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type": "application/json",
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.token);
            localStorage.setItem("userKey", res.userKey);
        })
        .catch(err => console.log(err));
    };


    return (
        <div style={{
            display: "block",
            textAlign: "center",
            width: "100%"
        }}>
            <h1>Login Page</h1>
            <div style={{
                width: "40%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export {Login};