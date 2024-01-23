import { useState } from "react"

  function AddTodoForm(Props)
  {
    const { activityArr, setactivityArr } = Props;

    const[newactivity, setNewactivity]= useState("")

    function handleChange(evt)
    {
      setNewactivity(evt.target.value)
    }
    function addActivity()
    {
      setactivityArr((prevArr)=>[...prevArr,{id:prevArr.length+1, activity:newactivity},])
      setNewactivity("")
    }

    return(
            <div className='flexe flex-col gap-3'>
                <h1 className="text-3xl font-medium">Manage Activities</h1>
                <div>
                    <input value={newactivity} onChange={handleChange} className=" gap-1 bg-transparent border border-black p-2" />
                    <button onClick={addActivity} className='bg-black text-white p-2 border border-black'> Add</button>
                </div>
            </div>
    )
  }

  export default AddTodoForm