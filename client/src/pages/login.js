import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="loginbody">
         

                <div className='loginbox'>


                <h3 className="logo">ChatThru</h3>
                <form onSubmit={handleSubmit}>
               
                    
                    <input type="email" className="inp" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" placeholder = "Enter your Email..." onChange={handleChangeInput} value={email} />
                    
               

              
                   

                    <div className="pass" id='passwd'>
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="inp"  placeholder='Enter Passwd...' 
                        onChange={handleChangeInput} value={password} name="password" />

                        <small className="sh" onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'} 
                        </small>
                    </div>
                   
                
                <button type="submit" className="inp" id='sub'
                disabled={email && password ? false : true}>
                    Login
                </button>

               </form>
               <p className="my-2">
                    Don't have an account? <a id='dont'><Link to="/register">Register Now</Link></a>
                </p></div>
            
        </div>
    )
}

export default Login
