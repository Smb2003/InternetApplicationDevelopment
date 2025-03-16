// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState(null);
//   const [error, seterror] = useState("");

  
//   const submitTodo = async (e) => {
//     e.preventDefault();
//     console.log(e.target)
//     try {
//       if(input !== ""){
//         await fetch('http://localhost:5000/api/addTodo', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ todo:input }),
//         });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//     setInput("")
//   }

//   const deleteTodo = (id) => {
//     console.log(id)
//     fetch(`http://localhost:5000/api/deleteTodo/${id}`, {
//       method: 'DELETE',
//       })
//     .then(res=>res.json())
//     .then(data => setTodos([...data.data]))
//     .catch(err=>console.log(err))
//   }
//   useEffect(()=>{
//     fetch("http://localhost:5000/api/get")
//     .then(res=>res.json())
//     .then(data => setTodos([...data.data]))
//     .catch(err=>seterror(err))
//   },[])
//   console.log(todos)
//   return (
//     <>
//       <div style={{width:"100%",height:"100%", display:"flex",  justifyContent:"center"}}>
//         <div>
//           <h1 style={{textAlign:'center', fontWeight:"bold"}}>Todos</h1>
//           <div>
//             <form onSubmit={input?submitTodo:null} style={{display:'flex', gap: "14px"}}>
//               <input type="text" name="text" id="todo" value={input} onChange={(e)=>setInput(e.target.value)} style={{width:"200px"}}/>
//               <button type='submit'>Add</button>
//             </form>
//           </div>
//           <div style={{padding:"10px"}}>
//             {todos.length > 0 && todos?.map((todoItem,index)=>{
//                 const {id,todo} = todoItem;
//               return(
//                 <div>
//                   <div key={id} style={{display:"flex"}}>
//                     <li  style={{listStyleType:"none", left:"0",margin:"10px"}}>{todo}</li>
//                     <button>Edit</button>
//                     <button onClick={()=>deleteTodo(id)}>Delete</button>
//                   </div>
//                 </div>
//             )
//             })}
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'

const App = () => {
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(null);
  const [input,setInput] = useState("") 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT": "POST";

    try {
      const response = await fetch(editId ? `http://localhost:5000/api/editTodo/${editId}` : "http://localhost:5000/api/addTodo",{
        method,
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify({todo: input})
      }); 
      const result = await response.json();

      if(editId){
        setTodos(todos.map(oldTodo => oldTodo.id === parseInt(editId)? result : oldTodo));
      }
      else{
        setTodos([...result.data])
      }
      setInput("");
    } catch (error) {
     console.log("err",error); 
    }
  }
  useEffect(() => {
    console.log("COmponent Mounted")
  }, [])
  
  return (
    <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{width:"50%", height:"90vh",backgroundColor:"lightcoral", padding:"10px"}}>
        <div style={{}}>
          <h1 style={{textAlign:"center"}}>Todo</h1>
          <form style={{display:'flex',justifyContent:"center", gap:"5px"}} onSubmit={handleSubmit}>
            <input type='text ' name="input" id='input'  value={input} placeholder='Enter todos...' onChange={(e)=>setInput(e.target.value)} style={{padding:"10px", width:"70%", fontSize:"17px"}}/>
            <button type="submit" style={{padding:"13px", width:"7vw", borderRadius:"10px",outline:"none",border:'none', cursor:"pointer", fontWeight:"bold"}}>{editId?"Update":"Add"}</button>
          </form>
          <ul>
            {
              todos && todos.map((item,index)=> {
                const {id,todo} = item;
                return(
                  <div style={{display:'flex', justifyContent:"space-between", padding:"10px"}}>
                    <li key={id} style={{fontSize:"15px",listStyleType:"none"}}>{todo}</li>
                    <div style={{display:'flex', gap:"5px"}}>
                      <button>Edit</button>
                      <button>Delete</button>
                    </div>

                  </div>
                )
              })
            }
          </ul>

        </div>
      </div>
    </div>
  )
}

export default App