import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Signup(props)
{
    const users=props.users
    const setusers=props.setusers
    const Navigate=useNavigate()

    const [eusername, setEusername] = useState()
    const [epassword, SetEpassword] = useState()
    function handleUinput(evt)
        {
            setEusername(evt.target.value)
        }
        function handlePinput(evt)
        {
            SetEpassword(evt.target.value)
        }
        function addUser()
        {
setusers([...users,{username:eusername, password:epassword}])
Navigate('/')
        }
    return(
        <div className = 'bg-black p-10'>
            <div className='bg-white p-10 border rounded-md' >
                   <h1 className="text-3xl font-medium">Hey Hi</h1>
                   <p>I Help u manage activities</p>

                   <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 border rounded-md" 
                    placeholder="Username" onChange={handleUinput} />

                    <input type="text" className="w-52 border-black p-1 border rounded-md" 
                    placeholder="Password" onChange={handlePinput}/>

                    <input type="text" className="w-52  border-black p-1 border rounded-md" 
                    placeholder="Confirm Password" />
                   <button onClick={addUser} className='bg-blue-600 w-24 border rounded-md' >Sign Up</button>
                   <p>Already have an account? <Link className="underline" to={'/'}>Login</Link></p>
                   </div>

            
            </div>
        </div>
    )
}

export default Signup 