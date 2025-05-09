import { useContext } from "react";
import { useState } from "react"
import UserContext from "../Context/UserContext";

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <>
            <h2>Login</h2>
            <input type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
            type="password" 
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button
            onClick={handleSubmit}
            >Submit</button>
        </>
    )
}

export default Login;