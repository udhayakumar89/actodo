import React from "react"
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from '../components/TodoContainer';

import { useLocation } from "react-router-dom"
function Landing()
{
const data=useLocation()
{
return(
    <div className='bg-black p-16'>
      <div className='bg-white p-10 border rounded-md'>
        <Header/>
        <div className='flex flex-wrap justify-between gap-2 py-6'>
        <Card bgcolor={'blue'} title={'Chennai'} subtitle={23}></Card>
        <Card bgcolor={'pink'} title={'January'} subtitle={'17:49:35'}></Card>
        <Card bgcolor={'orange'} title={'Built Using'} subtitle={'React'}></Card>
        </div>
        <TodoContainer/>
        
      </div>
      <h1>Hello {data.state.user} </h1>
    </div>
    
)
}
}
export default Landing