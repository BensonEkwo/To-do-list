import React from "react";
import { useState,useEffect } from "react";
import './index.css'
import Form from "./Form";
function App() {
  const [val, setValue] = useState("");
  const [tasks, SetTask] = useState([]);
  const change=(e)=>{
    setValue(e.currentTarget.value)
  }
  const addTask = () => {
    SetTask([
      ...tasks,
      {
        id: tasks.length,
        value: val,
        isChecked: false,
      },
    ]);
  };
  
const removeTask=(id)=>{
const newTask=tasks.filter((task)=>task.id!==id)
SetTask(newTask)
}
const clearTask=()=>{
  SetTask([])
}
useEffect(()=>{

},[])
const handleClick=()=>{
  if(val.length>0)
  addTask();
  setValue('');
}
  return (
    <div className="App">
      <h1>My To DO List Manager</h1>
      <h2>Add Task</h2>
      <input 
      className='myInput'
      onChange={change}
       onKeyDown={(e)=>{
        if(e.key==="Enter"&&val.length>0){
          addTask();
         setValue('')
        }
       }}
        placeholder="enter task"
       value={val}
      ></input>
      <button className="addButton" onClick={handleClick}>Add</button>
      
      <ViewTasks setTask={SetTask} tasks={tasks} title="List of my undone Tasks" removeTask={removeTask} />
          {tasks.length>0 &&<DropTask clearTask={clearTask}/>}
          <Form/>
    </div>
  );
}
export default App;


const ViewTasks = ({tasks,title,removeTask, setTask}) => {

const handleChangeFactory=(id)=>(e)=>{
  setTask(curr=>{
    let allTask=[...curr];
    allTask[id]={...curr[id],isChecked:!curr[id].isChecked}
    return allTask;
  })
}

  return (
    <div className="viewTask">
      <h3>{title}</h3>
  
        {tasks.map((task, id) => (
          <div key={task.id}>
          <li><input type='checkbox' checked={task.isChecked}  onChange={handleChangeFactory(id)}></input> {task.value} {task.isChecked&&<button className='removeButton' onClick={()=>removeTask(task.id)}></button>}</li>
          </div>

         
          
        ))}
    
      
      
    </div> 
  );
};
const DropTask=({clearTask})=>{
  return(
    <div>
<p>clear Task</p>
<button className="clearButton" onClick={clearTask}>clear task</button>
    </div>
  )
  
 }
