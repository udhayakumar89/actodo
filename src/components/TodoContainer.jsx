import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
function TodoContainer() {
    const [activityArr, setactivityArr]=useState([
        { id:1, activity:'Wake up at 6 Am'},
        {
         id:2, activity:'Walking 30 Mins'
        },
        {
         id:3, activity:'drink 4 litre water'
        }
     ])
    return (
        <div className="flex gap-3 flex-wrap">
            <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}></AddTodoForm>
            <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
        </div>  

    )
}
export default TodoContainer