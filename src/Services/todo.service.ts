import { API } from "./Api"

class todo{
    getTodos = async ()=>{
      return (await API.get('todo'));
    }

    addTodo = async (url:string , body: any) => {
      return (await API.post(url,body))
    }

    updateTodo = async (url: string,body: any)=>{
      return (await API.patch(url,body));
    }

    deleteTodo = async (url: string) => {
      return (await API.delete(url));
    }
}

export  const Todo = new todo();