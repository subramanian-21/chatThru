import "./pages.scss"
function Login() {
    return( <div className="loginbody">
         

    <div className='loginbox'>


    <h3 className="logo">ChatThru</h3>
    <form>
   
        
        <input type="email" className="inp" id="exampleInputEmail1" name="email"
        aria-describedby="emailHelp" placeholder = "Enter your Email..." />
        
   

  
       

        <div className="pass" id='passwd'>
            
            <input 
            className="inp"  placeholder='Enter Passwd...' 
            name="password" />

            <small className="sh" >

            </small>
        </div>
       
    
    <button type="submit" className="inp" id='sub'>
        Login
    </button>

   </form>
   <p className="my-2">
        Don't have an account? <a id='dont'></a>
    </p></div>

</div>)
}
export default Login