import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const adminUser = {
        email: 'nguyenhoang@gmail.com',
        password: 'letmein'
    }
    const navigate = useNavigate()
    const [details, setDetails] = useState({ email: '', password: '' })

    const handleSubmit = e => {
        e.preventDefault()
        if (details.email === adminUser.email && details.password === adminUser.password) {
            alert('login successfully!!')
            navigate(`/employees`)
        } else {
            alert('enter correct email & password!!')
        }
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" name="" id="" onChange={e => setDetails({ ...details, email: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" onChange={e => setDetails({ ...details, password: e.target.value })} />
                </div>
                <input type="submit" value='login' name="" id="" />
            </form>
        </div>
    )
}
