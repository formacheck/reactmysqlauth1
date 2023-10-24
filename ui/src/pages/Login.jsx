import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './validation'
import '../App.css'

const Login = () => {
    const [errors, setErrors] = useState({})

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    navigator = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation1(values))
        if (errors.email === "" && errors.password === "") {
            axios.post('localhost:8080/signin', values)
                // .then(res => console.log(res)) testing
                .then(res => {
                    if (res.data === "success") {
                        Navigate('/home')
                    }
                    else {
                        alert("in valid credentials")
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='card'>
            <p>login</p>
            <form>
                <input type='email' name='email' onChange={handleChange} placeholder='enter email' />
                {errors.email && <span>{errors.email}</span>}
                <br />
                <input type='password' name='password' onChange={handleChange} placeholder='*********' />
                {errors.password && <span>{errors.password}</span>}
                <br />
                <Link to={"/register"}>register</Link> <br /><br />
                <button type='submit' onClick={handleSubmit}>login</button>
            </form>
        </div>
    )
}

export default Login