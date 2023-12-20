import React, { useState,useEffect } from 'react'
import { Link,useParams,useLocation } from "react-router-dom";
import '../index.css'


const Home=(props)=> {
    const [form, setForm] = useState("")
    // const location = useLocation();
    // const token=location.state
     const {people,token} =useParams();
const {id}=useParams()
    const [data, setData] = useState("")
    const [studentslist, setStudentslist] = useState([])
    const[toggle,settoggle]=useState(false)
    localStorage.getItem('jsonwebtoken',`test ${token}`)
    const submitData = (e) => {
        e.preventDefault()
e.target.reset()
// let input=e.target.task1.value
// console.log(input)
// props.dispatch(addTodo(input))
        // const formdata=new FormData()
        // formdata.append("form",form)
        fetch("http://localhost:8080/posts/",{
            method: "POST",
          body:JSON.stringify(form),
        headers: {
            "Content-Type": "application/json",
            // "Content-Type":"multipart/form-data",
            "Accept": "application/json",
            "Authorization":`test ${token}`
        }
        }).then((res) => res.json()).then(
            (data) => {
                setData(data)
                settoggle(!toggle)
            // const token=res.token
        alert(JSON.stringify(data))
        const id=data._id
    })
        
    }
   
    useEffect(() => {
        fetch("http://localhost:8080/posts",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Content-Type":"multipart/form-data",
                "Accept": "application/json",
                "Authorization":`test ${token}`
            }
        }).then((response) => response.json()).then((value) => { setStudentslist(value.posts)
       
         })
    },[toggle])


    function handleDelete(id){
        console.log(id)
        fetch(`http://localhost:8080/posts/${id}`,{
            method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // "Content-Type":"multipart/form-data",
            "Accept": "application/json",
            "Authorization":`test ${token}`
        }
        }).then((res) => res.json()).then((value) => alert("successfully deleted"))
          settoggle(!toggle)
        
}


  return (
    <div>
        <h1>USER ID:{people}</h1>
        <h1>This is home page</h1>
        <form onSubmit={submitData}  >
        <input type="text" name="task1" placeholder="enter the task" style={{width:"250px"}}
                         onChange={(e)=> setForm({...form,task1:e.target.value}) } />
                      
                          {/* <input type='file' name='image' accept='image/*' onChange={(e)=>setForm({...form,image:e.target.files[0]})}></input>           */}
                        <button style={{backgroundColor:"blue",color:"white",border:"none"}} type="submit">Posts</button> 
                
        </form>
        <button>
        <Link style={{textDecoration:"none"}} to="/">Logout</Link>

    </button>
    {
                data.status === "success" && <div style={{ color: "green" }}>ADDED SUCCESSFULLY</div>
            }{
                data.status === "failed" && <div style={{ color: "red" }}> FAILED</div>

            }
    
        <div>

                  { studentslist.map((val, key) => { return <div style={{border:"1px solid black",marginBottom:"5px"}} >  
                  
                            <p className='inline'>{val.task1}</p>
                            {/* <p>{val._id}</p> */}
                            <button className='inline' >Edit</button>
                            <button className='inline' onClick={()=>handleDelete(val._id)}>Delete</button>
                            </div>
                          
                    }
                    )
                }
       </div>
          
    
    </div>
  )
}

export default Home
