import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        const payload = {
            username,
            email,
            password
        }

        fetch(`https://rich-red-indri-tie.cyclic.app/users/user/signup`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json",
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };


    return (
        <div style={{
            display: "block",
            textAlign: "center",
            width: "100%"
        }}>
            <h1>User Registration Page</h1>
            <div style={{
                width: "40%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <input type="text" placeholder="Enter Name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleRegister}>Register</button>
                <Link to="/adminregidter"><button>Admin</button></Link>
            </div>
        </div>
    );
}

export { Register };