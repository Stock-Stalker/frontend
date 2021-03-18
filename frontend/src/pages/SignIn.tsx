import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Layout from '../components/Layout'
import './Auth.css'
const SignIn: React.FC = () => {
    const history = useHistory()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    async function signIn(event: any) {
        event.preventDefault()
        if (
            username &&
            username.length > 0 &&
            password &&
            password.length > 0
        ) {
            try {
                await axios.post(process.env.REACT_APP_URI + '/user/signin', {
                    username: username,
                    password: password,
                })
                history.push('/welcome')
            } catch (error) {
                setErrorMessage('Something went wrong')
            }
        } else {
            setErrorMessage('Username or password is invalid')
        }
    }
    return (
        <Layout>
            <div className="container">
                <div className="glass-primary ellipse auth">
                    <div className="auth-aspect-ratio" />
                    <div className="auth-content">
                        <h1 className="neon-tertiary text-tertiary uppercase">
                            Sign In
                        </h1>
                        <form onSubmit={signIn}>
                            <input
                                type="text"
                                className="glass-input-primary"
                                placeholder="Username"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                    setErrorMessage('')
                                }}
                            />
                            <input
                                type="password"
                                className="glass-input-primary"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setErrorMessage('')
                                }}
                            />
                            <button type="submit">Sign In</button>
                            {errorMessage && (
                                <small className="text-error">
                                    {errorMessage}
                                </small>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SignIn
