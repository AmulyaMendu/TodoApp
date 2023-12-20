import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"

const SignIn=(props)=>{
    const [form, setForm] = useState({})
    let navigateTo=useNavigate();
    const submitData=(e)=>{
        e.preventDefault()
        console.log(form)
        fetch("http://localhost:8080/signin/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((data) => data.json()).then((res) =>  { 

            if(res.status==="success"){
                const token=res.token
                console.log(token)
                localStorage.setItem('jsonwebtoken',`test ${token}`)
              
                navigateTo(`/home/${encodeURIComponent(res.people)}/${encodeURIComponent(token)}`,{state:token})
            }else{
                navigateTo("/signup")
            }
        })
            

    }
    return (<div style={{...props.style,padding:"30px",marginTop:"10px"}}>
    <form className="signupform" onSubmit={submitData}>
                        <input type="email" name="email" placeholder="email"
                         onChange={(e)=> setForm({...form,email:e.target.value}) } />
                        <input type="password" name="password" placeholder="password" 
                         onChange={(e)=> setForm({...form,password:e.target.value}) }/>          
                        <button style={{backgroundColor:"blue",color:"white",border:"none"}} type="submit">SignIn</button> 
                </form>
    <h6>do have an account ? <button><Link to={"/signup"}>SignUp</Link></button></h6>

    </div>
    )
}
export default SignIn