import TodoItem from "./TodoItem"

    function TodoList(Props) {       
        const { activityArr, setactivityArr } = Props;
    return (
        <div className='bg-blue-300 p-2 border rounded-r-md flex-grow '>
            <h1 className="text-2xl">
                Today's Activity
            </h1>
            {activityArr.length===0?<p>You haven't added anything yet</p>:""}
            {
                activityArr.map(function (item, index) {
                    return (
                    <TodoItem id={item.id}
                     activity={item.activity} 
                     index={index} 
                     activityArr={activityArr} 
                     setactivityArr={setactivityArr}></TodoItem>
                    )
                    })
            }
        </div>
    )
}
export default TodoList