import React, { Component, useState } from "react"
import { GlobalCtx } from "../App"

const Login = (props) => {
    const { gState, setGState } = React.useContext(GlobalCtx)
    const { url } = gState

    const blank = {
        username: "",
        password: ""
    }

    const [form, setForm] = React.useState(blank)

    const [error, setError] = useState(undefined)

    const handleChange = (thing) => {
        setForm({ ...form, [thing.target.name]: thing.target.value })
    }

    const handleSubmit = (thing) => {
        thing.preventDefault()
        const { username, password } = form
        fetch(`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then( async (response) => {
                const result = await response.json()
                if (response.ok === false) {
                    const error = Error(`Request failed with a status of ${response.status}`)
                    error.response = response
                    error.data = result || null
                    error.code = response.status || ""
                    throw error
                }
                return result
            })
            .then(data => {
                window.localStorage.setItem("token", JSON.stringify(data))
                setGState({ ...gState, token: data.token })
                setForm(blank)
                props.history.push("/")
            })
            .catch(error => {
                if (error.data.error === "USER DOES NOT EXIST") {
                    setError("Credentials Invalid")
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
            {error&&<p>{error}</p>}
            <p>Don't have an account? Sign up <a href="/signup">here</a></p>
        </>
    )
}
export default Login