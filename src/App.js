
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { useState } from "react";
import Signup from './pages/Signup'
import Login from "./pages/Login";
import Landing from "./pages/Landing";


function App()
{
  const [users, setusers] = useState(
    [
        { 
            username:"udhaya",
            password:"1234"
        }
    ]
)
  return(
     <div>

  
    <BrowserRouter>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"></link>
       
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers} />}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
