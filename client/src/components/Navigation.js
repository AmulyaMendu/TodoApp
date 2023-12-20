import { Link } from "react-router-dom";
const Navigation=()=>{
    return <>
    <Link to={"/signin"}>SignIn Page</Link> <br/>
    <Link to={"/signup"} >SignUp Page</Link>
    
    </>
}

export default Navigation