import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'

const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <div className="signbody">

            <div className='signbox'>
           
            <h3 className="logo">ChatThru</h3>
            <form onSubmit={handleSubmit}>

                   
                    <input type="text" className="inp" id="fullname" name="fullname" placeholder='Enter your Name...'
                    onChange={handleChangeInput} value={fullname}
                    style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="form-text text-danger">
                        {alert.fullname ? alert.fullname : ''}
                    </small>
              

  
                    <input type="text"  className="inp" id="username" name="username" placeholder='Enter your User Name...'
                    onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                    style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="form-text text-danger">
                        {alert.username ? alert.username : ''}
                    </small>
        

        
  
                    <input type="email" className="inp" id="exampleInputEmail1" name="email" placeholder='Enter your Email...'
                    onChange={handleChangeInput} value={email}
                    style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="form-text text-danger">
                        {alert.email ? alert.email : ''}
                    </small>
          

          
                 

                    <div className="pass" id='passwd'>
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="inp" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" placeholder='Create Password...'
                        style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />

                        <small className='sh' onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
             

                    <small className="form-text text-danger">
                        {alert.password ? alert.password : ''}
                    </small>
                </div>

    

                    <div className="pass" id='passwd'>
                        
                        <input type={ typeCfPass ? "text" : "password" } 
                        className="inp" id="cf_password" placeholder='Confirm Password...'
                        onChange={handleChangeInput} value={cf_password} name="cf_password"
                        style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />

                        <small className='sh' onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? 'Hide' : 'Show'}
                        </small>
                    </div>

                    <small className="form-text text-danger">
                        {alert.cf_password ? alert.cf_password : ''}
                    </small>
            
                <div className="row justify-content-between mx-0 mb-1">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender"
                        value="male" defaultChecked onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="female">
                        &nbsp;&nbsp;Female: <input type="radio" id="female" name="gender"
                        value="female" onChange={handleChangeInput} />
                    </label>

                  
                </div>
                
                <button disabled={fullname && username && email && password ? false : true} type="submit" className="inp" id='sub'> Register</button>

              
            </form>
            <p className="my-2">
                    Already have an account? <a id='dont'><Link to="/" >Login</Link></a> 
                </p>
            </div>
        </div>
    )
}

export default Register
