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
        setForm({...form, [thing.target.name]: thing.target.value})
    }

    const handleSubmit = (thing) => {
        thing.preventDefault()
        const {username, password} = form
        fetch(`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.localStorage.setItem("token", JSON.stringify(data))
            setGState({...gState, token: data.token})
            setForm(blank)
            props.history.push("/")
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="inputSignup" type="text" name="username" value={form.username} onChange={handleChange}/>
                <input id="inputSignup" type="password" name="password" value={form.password} onChange={handleChange}/>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default Login