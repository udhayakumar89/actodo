function TodoItem(Props)
{
    const activityArr = Props.activityArr
    const setactivityArr = Props.setactivityArr

    function handleDelete(deleteid)
{
    var temparr=activityArr.filter(function(item){
        if(item.id === deleteid) 
        {
            return false 
        }
        else{
            return true 
        }
    })
    setactivityArr(temparr)
}

return(
    <div className="flex justify-between">
    <p>{Props.index+1}. {Props.activity}</p>
    <button className="text-red-500" onClick={()=>handleDelete(Props.id)}>Delete</button>
    </div>
)
}
export default TodoItem

// function TodoItem({ id, activity, index, activityArr, setactivityArr }) {
//     const handleDelete = (deleteId) => {
//       const tempArr = activityArr.filter((item) => item.id !== deleteId);
//       setactivityArr(tempArr);
//     };
  
//     return (
//       <div className="flex justify-between">
//         <p>
//           {index + 1}. {activity}
//         </p>
//         <button className="text-red-500" onClick={() => handleDelete(id)}>
//           Delete
//         </button>
//       </div>
//     );
//   }
  
//   export default TodoItem;
  