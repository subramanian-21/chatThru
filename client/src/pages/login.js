import { Link } from "react-router-dom"
import "./pages.css"
function Login() {
    return( <div className="loginbody">
         

    <div className='loginbox'>


    <div className="logo">
        <div className="logo-img"></div>
        <div className="logo-name">ChatThru</div></div>
    <form>
   
        
        <input type="email" className="inp border-1" id="exampleInputEmail1" name="email"
        aria-describedby="emailHelp" placeholder = "Enter your Email..." />
        
   

  
       

        <div className="pass" id='passwd'>
            
            <input className="inp border-1"  placeholder='Enter Passwd...' name="password" />

            <small className="sh" >
                
            </small>
        </div>
       
    
    <button type="submit" className="inp" id='sub'>
        Login
    </button>

   </form>
   <p className="my-2">
        Don't have an account? <Link className="a" to="/register">Register</Link>
    </p></div>

</div>)
}
export default Login