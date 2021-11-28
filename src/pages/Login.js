import React from "react"
import { GlobalCtx } from "../App"

const Login = (props) => {
    const { gState, setGState } = React.useContext(GlobalCtx)
    const { url } = gState

    const blank = {
        username: "",
        password: ""
    }

    const [form, setForm] = React.useState(blank)

    const handleChange = (thing) => {
        setForm({ ...form, [thing.target.name]: thing.target.value })
    }

    const handleSubmit = (thing) => {
        thing.preventDefault()
        const {username, password} = form
        window.localStorage.removeItem("username")
        window.localStorage.setItem("username", username)
        fetch(`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            if(data.error == null){
            window.localStorage.setItem("token", JSON.stringify(data))
            const loggedInUser = window.localStorage.getItem("username")
            setGState({...gState, token: data.token, username: loggedInUser})
            setForm(blank)
            props.history.push("/");
            }
            else{
                window.localStorage.removeItem("username")
            }
        })

    }
    return (
        <>
            <h1 className="loginWelcome">Welcome to Events n' Stuff</h1>
            <p>Login with your account below.</p>
            <div className="authBox">
                <form className="loginBox" onSubmit={handleSubmit}>
                    <input id="inputSignup" placeholder="Enter Username" type="text" name="username" value={form.username} onChange={handleChange} />
                    <input id="inputSignup" placeholder="Enter Password" type="password" name="password" value={form.password} onChange={handleChange} />
                    <div className="inputButton">
                        <input className="loginButton" type="submit" value="Login" /></div>
                </form>
            </div>
            <p>Don't have an account? Sign up <a href="/signup">here</a></p>
        </>
    )
}
export default Login