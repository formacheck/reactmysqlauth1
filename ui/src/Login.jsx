import React from 'react'
import './App.css'

const Login = () => {
    return (

        <div className='card'>
            <p>login</p>
            <form>
                <input type='email' name='email' placeholder='enter email' /><br />
                <input type='password' name='password' placeholder='*********' /><br />
                <a href="/register">register</a>
                <button type='submit'>login</button>
            </form>
        </div>
    )
}

export default Login