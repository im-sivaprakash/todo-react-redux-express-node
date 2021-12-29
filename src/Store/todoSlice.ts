import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../Services/todo.service";
import { RootState } from "./store";

// let lastId = 0;
// export default function reducer(state: any = [],action:any)
// {
//    if(action.type === 'AddTodo')
//    return [
//        ...state,
//        { 
//         id : ++lastId,
//        content : action.payload.content,
//        isCompleted : false
//       }
//    ]
//    else if(action.type === 'removeTodo')
//    return state.filter((todo: any)=> todo.id !== action.payload.id)

//    else
//    return state
// }

//-----------------Thunks-------------------------------------

export const addTodo = createAsyncThunk('todo/add',async(body: any)=>{
  body.completed = false;
  const newTodo = await Todo.addTodo('todo',body);
  return newTodo;
})

export const getTodo = createAsyncThunk('todo/get',async ()=>{
  const allTodos = await Todo.getTodos();
  return allTodos;
})

export const todoStatusUpdate = createAsyncThunk('todo/done',async (data: any) => {
  const {_id, isCompleted} = data;  
  return await Todo.updateTodo('todo/'+_id, {completed : isCompleted})
})

export const todoContentUpdate = createAsyncThunk('todo/edit',async (data: any) => {
  const {_id,content} = data;  
  return await Todo.updateTodo('todo/'+_id, {content : content})
})

export const deleteTodo = createAsyncThunk('todo/delete',async (_id: string)=>{
   return await Todo.deleteTodo('todo/'+_id);
})

//---------------------------------------------------------------



//-------------------------------------------Adaptors-----------


export  const todoSlice = createSlice({
  name : "todo",
  initialState : [],
  reducers:{

  },
  extraReducers : (builder)=>{

    //getALl todos
    builder.addCase(getTodo.fulfilled,(state,action)=>{
      const allTodos = action.payload;
      state = allTodos;
      return state
    })

    //change todo status
    builder.addCase(todoStatusUpdate.fulfilled,(state,action)=>{ 
      state.forEach((todo: any)=> (todo._id === action.payload[0]._id) &&  (todo.completed =  action.payload[0].completed))
      return state;
    })

    //delete todo
    builder.addCase(deleteTodo.fulfilled,(state,action)=>{
      return state.filter((todo: any)=> todo._id !== action.payload[0]._id);
    })

    //add Todo
    builder.addCase(addTodo.fulfilled,(state,action)=>{
      const newTodo: never[] = action.payload;
      return [...state,...newTodo]
    })

    //Edit todo 
    builder.addCase(todoContentUpdate.fulfilled,(state,action)=>{ 
      state.forEach((todo: any)=> (todo._id === action.payload[0]._id) &&  (todo.content =  action.payload[0].content))
      return state;
    })



  }
})
export const todoSelector = (state: RootState)=> state.todo
export const  todoReducer = todoSlice.reducer;

// export const { getTodo } = todoSlice.actions;