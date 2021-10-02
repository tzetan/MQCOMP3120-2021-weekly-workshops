import React, {useState} from 'react'
import axiosService from './services/axiosService'


const LoginForm = ({user, setUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const formHandler = (event) => {
        event.preventDefault()

        console.log("submitted", username, password)
        axiosService.login({username, password})
            .then(data => {
                console.log("Success: ", data)
                setUser(data)
            })
            .catch(error => {
                console.log("Error: ", error)
            })
    }

    const logoutHandler = () => {
        setUser(null)
    }

    //shows login status
    if (user) {
        return (
            <div className="row">
                <p>Logged In as {user.name}
                    <button onClick={logoutHandler}>Logout</button>
                </p>
            </div>
        )
    } else {
        return (
            <form onSubmit={formHandler}>
                <div className="row">
                    <div className="four columns">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="four columns">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="three columns">
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </form>
        )
    }

}

export default LoginForm