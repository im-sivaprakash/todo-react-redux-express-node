import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../Services/todo.service";
import { RootState } from "./store";



//-----------------Thunks-------------------------------------

export const addTodo = createAsyncThunk('todo/add',async(body: any)=>{
  body.completed = false;
  const newTodo = await Todo.addTodo(body);
  return newTodo;
})

export const getTodo = createAsyncThunk('todo/get',async ()=>{
  const allTodos = await Todo.getTodos();
  return allTodos;
})

export const todoStatusUpdate = createAsyncThunk('todo/done',async (data: any) => {
  const {_id, isCompleted} = data;  
  return await Todo.updateTodo(_id, {completed : isCompleted})
})

export const todoContentUpdate = createAsyncThunk('todo/edit',async (data: any) => {
  const {_id,content} = data;  
  return await Todo.updateTodo(_id, {content : content})
})

export const deleteTodo = createAsyncThunk('todo/delete',async (_id: string)=>{
   return await Todo.deleteTodo(_id);
})

//---------------------------------------------------------------



//-------------------------------------------Adaptors-----------

const todoAdapter = createEntityAdapter({
  selectId : (todo:any) => todo._id
})

//------------------------------------------Slice---------------

export  const todoSlice = createSlice({
  name : "todo",
  initialState : todoAdapter.getInitialState(),
  reducers:{

  },
  extraReducers : (builder)=>{

    //getALl todos
    builder.addCase(getTodo.fulfilled,(state,action)=>{
      const allTodos = action.payload;
      todoAdapter.setAll(state,allTodos);
    })

    //change todo status
    builder.addCase(todoStatusUpdate.fulfilled,(state,action)=>{ 
      todoAdapter.updateOne(state,{id: action.payload[0]._id, changes : { completed : action.payload[0].completed }  })
    })

    //delete todo
    builder.addCase(deleteTodo.fulfilled,(state,action)=>{
      todoAdapter.removeOne(state, action.payload[0]._id)
    })

    //add Todo
    builder.addCase(addTodo.fulfilled,(state,action)=>{
      todoAdapter.addOne(state, action.payload[0]);
    })

    //Edit todo 
    builder.addCase(todoContentUpdate.fulfilled,(state,action)=>{ 
      todoAdapter.updateOne(state,{id: action.payload[0]._id, changes : { content : action.payload[0].content }  })
    })
  }
})

//------------------------------Selectors---------------------------------

const selector = todoAdapter.getSelectors((state: RootState)=>state.todo)

export const todoSelector = createSelector( selector.selectAll,(data:any)=>{
  console.log('from Selector',data);
  return data;
})

//------------------------------------------------------------------------

export const  todoReducer = todoSlice.reducer;


//---------Legacy Code

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