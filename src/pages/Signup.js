import React from "react"
import { Link } from "react-router-dom"
import { GlobalCtx } from "../App"

const Signup = (props) => {
    const { gState, setGState } = React.useContext(GlobalCtx)
    const { url } = gState

    const blank = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    }

    const [form, setForm] = React.useState(blank)

    const handleChange = (thing) => {
        setForm({ ...form, [thing.target.name]: thing.target.value })
    }

    const handleSubmit = (thing) => {
        thing.preventDefault()
        const { username, password, firstName, lastName, email } = form
        fetch(`${url}/auth/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password, firstName, lastName, email })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setForm(blank)
                props.history.push("/login")
            })

    }
    return (
        <>
            <h1 className="loginWelcome">Welcome to Events n' Stuff</h1>
            <p>Sign up for free today.</p>
            <div className="authBox">
                <form className="loginBox" onSubmit={handleSubmit}>
                    <input id="inputSignup" placeholder="Create Username" type="text" name="username" value={form.username} onChange={handleChange} />
                    <input id="inputSignup" placeholder="Create Password" type="password" name="password" value={form.password} onChange={handleChange} />
                    <input id="inputSignup" placeholder="First Name" type="text" name="firstName" value={form.firstName} onChange={handleChange} />
                    <input id="inputSignup" placeholder="Last Name" type="text" name="lastName" value={form.lastName} onChange={handleChange} />
                    <input id="inputSignup" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} />
                    <div className="inputButton">
                        <input className="loginButton" type="submit" value="Sign Up" /></div>
                </form>
            </div>
            <p>Already have an account? Login <Link to="/login">here</Link></p>
        </>
    )
}
export default Signup