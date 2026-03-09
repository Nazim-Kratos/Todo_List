import { useState ,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar'
function App() {
  const [Todo, setTodo] = useState("")
  const [showfinished,setshowfinished]=useState(true);
  const [Todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })
  const HandleEdit = (e,id) => {
    let t=Todos.filter(i=>i.id == id)
    setTodo(t[0].Todo)
    const todos = Todos.filter((Todo => {
      return Todo.id !== id
    }))
    
    setTodos(todos)
   
  }
  const HandleDelete = (id) => {
    let confirmDelete = confirm("Do you really want to delete this todo?");
    if (!confirmDelete) return;
    const todos=Todos.filter((Todo=> 
      {
        return Todo.id!==id
      }))
    setTodos(todos)
  }
  const HandleAdd = () => {
    if(Todo.trim()==="") return;
    setTodos([...Todos, {id:uuidv4(), Todo, isCompleted: false }])
    setTodo("")
  }
  const HandleChange = (e) => {
    setTodo(e.target.value)
    

  }
  const HandleCheckBox=(e) => {
    let id=e.target.name
    
    let index=Todos.findIndex(item=>{
     
      return item.id === id
    })
    
    const newTodos=[...Todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos)
  }
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  }, [Todos]);
  const toggleFinished=(e)=>{
    setshowfinished(!showfinished)
  }
  const HandleKeyPress = (e) => {
    if (e.key === "Enter") {
      HandleAdd(); 
    }
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-4 sm:p-6 bg-violet-100 min-h-[80vh] max-w-175">
        <div >

          <h1 className='flex justify-center font-bold text-[20px]'>
            iTask-Manage Your All Todos At One Place
          </h1>
          <div className="taksbar flex justify-center gap-3 my-6">
            <input onChange={HandleChange} onKeyDown={HandleKeyPress} value={Todo} type="text" required placeholder='Add a Todo' className='outline rounded-2xl w-full sm:w-87.5 bg-white text-black pl-4 py-1' />
            <button onClick={HandleAdd}  disabled={Todo.trim() === ""} className='bg-green-500 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed active:scale-95 transition-all text-white rounded-md px-4 py-1'>Save</button>
          </div>
        </div>
        <div className="Todos ">
          <input type="checkbox" onChange={toggleFinished} checked={showfinished} />Check Your Finished Todos
          <h2 className = 'font-semibold' > Your Todos</h2>
          {Todos.length === 0 && <div className='ml-5 mt-3'> Todo Is Empty Now</div>}
          {Todos.map((items => {
            return (showfinished || !items.isCompleted) && <div key={items.id} className='flex flex-col sm:flex-row sm:items-center justify-between w-full sm:w-150 my-4 gap-3'>
              <div className='flex gap-5'>
              <input name={items.id} type="checkbox" checked={items.isCompleted} onChange={HandleCheckBox}  />
                <div className={`wrap-break-word max-w-full sm:max-w-87.5 ${items.isCompleted ? "line-through text-gray-500" : ""}`}>
                  {items.Todo}
                </div>
              </div>
              <div className="buttons flex gap-3 sm:gap-4 shrink-0">
                <button onClick={(e) => HandleEdit(e, items.id)} className='bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all text-white rounded-md px-3 py-1' name={items.id} value={items.editId}>
              Edit</button>
                <button onClick={()=>HandleDelete(items.id)} id='Delete' className='bg-violet-600 hover:bg-violet-900 cursor-pointer transition-all 
           text-white rounded-[5px] w-15 h-8'>Delete</button>
          </div>
        </div>
         }))}
        </div>
    </div >


    </>
  )
}

export default App
