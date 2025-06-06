import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const [todos, setTodo] = useState([{ task: "Coding", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  const task = () => {
    if (newTodo.trim() === "") return;
    const newTask = {
      task: newTodo,
      id: uuidv4()
    };
    setTodo((prev) => [...prev, newTask]);
    setNewTodo("");
  };
let deleteTodo=(id)=>{
    setTodo((prev)=>{
        return prev.filter((todo)=>todo.id!==id)
    })

  };

  let upperCase=()=>{
    setTodo((prev)=>
        prev.map((prevtodo)=>({
            ...prevtodo,task:prevtodo.task.toUpperCase()})
        )
    )
  }

  const updateValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <input
        onChange={updateValue}
        value={newTodo}
        placeholder="Enter New task"
      />
      <button onClick={task}>Add Task</button>
      <button onClick={upperCase} >Uppercase:</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            
            

            
          </li>
        ))}
      </ul>
    </>
  );
}

