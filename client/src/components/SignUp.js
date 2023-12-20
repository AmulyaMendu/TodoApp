import { Link, json } from "react-router-dom"
import { useState } from "react"
const SignUp = (props) => {
    const [form, setForm] = useState({})
    const submitData=(e)=>{
        e.preventDefault()
        console.log(form)
        fetch("http://localhost:8080/signup/add", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then((data) => data.json()).then((res) => alert(JSON.stringify(res)))
    }
    return (
        <div style={{ ...props.style, padding: "5px", marginTop: "1px" }}>
            <div style={{ background: "lightblue", width: "30%", marginLeft: "35%" }}>
                <p>i am from SignUp component</p>

                <form className="signupform" onSubmit={submitData}>
                        <input type="email" name="email" placeholder="email"
                         onChange={(e)=> setForm({...form,email:e.target.value}) } />
                        <input type="password" name="password" placeholder="password" 
                         onChange={(e)=> setForm({...form,password:e.target.value}) }/>
                        <input type="password" name="confirmpassword" placeholder="confirmpassword"
                         onChange={(e)=> setForm({...form,confirmpassword:e.target.value}) } />              
                        <button style={{backgroundColor:"blue",color:"white",border:"none"}} type="submit">Sign Up</button> 
                </form>
            </div>
            <div>

                <button style={{ marginTop: "20px" }}><Link to={"/"}>SignIn</Link></button>
            </div>


        </div>
    )
}
export default SignUp