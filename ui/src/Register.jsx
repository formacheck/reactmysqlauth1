import React from 'react'
import './App.css'

const Register = () => {
    return (

        <div className='card'>
            <p>register</p>
            <form>
                <input type='text' name='name' placeholder='enter name' /><br />
                <input type='email' name='email' placeholder='enter email' /><br />
                <input type='password' name='password' placeholder='*********' /><br />
                <a href="/login">login</a>
                <button type='submit'>register</button>
            </form>
        </div>

    )
}

export default Register