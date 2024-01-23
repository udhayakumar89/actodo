import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props ) {
    const [eusername, setEusername] = useState()
    const [epassword, SetEpassword] = useState()
    const [ruser, setRuser]=useState(true)
    const Navigate = useNavigate()
    const users=props.users
       
    function checkUser() 
    {
        var userfound=false
        users.forEach(function(item)
        {
            if(item.username === eusername && item.password=== epassword)
            {
                console.log("Login Successful")
                userfound=true
                Navigate('/landing',{state:{user:eusername}})
            }

            if(userfound===false)
            {
                console.log('Login Failed')
                setRuser(false)
            }
        })
        
    }
    function handleUinput(evt)
        {
            setEusername(evt.target.value)
        }
        function handlePinput(evt)
        {
            SetEpassword(evt.target.value)
        }

    return (
        <div className='bg-black p-10'>
            <div className='bg-white p-10 border rounded-md' >
            <h1 className="text-3xl font-medium">Hey Hi</h1>
                  {ruser?<p>I Help u manage activities</p>:<p className='text-red-600 '>Sign Up Before Login</p>} 
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 
                    border rounded-md" placeholder="Username" onChange={handleUinput}/>

                    <input type="text" className="w-52 border-black p-1 
                    border rounded-md" placeholder="Password" onChange={handlePinput} />


                    <button onClick={checkUser} className='bg-blue-300 w-24 border rounded-md'>Login</button>
                    <p>New User <Link className="underline" to={'/signup'}>Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login