import { API } from "./Api"

class todo{

  baseUrl: string = 'todo/'

    getTodos = async ()=>{
      return (await API.get('todo'));
    }

    addTodo = async (body: any) => {
      return (await API.post(this.baseUrl,body))
    }

    updateTodo = async (url: string,body: any)=>{
      return (await API.patch(this.baseUrl+url,body));
    }

    deleteTodo = async (url: string) => {
      return (await API.delete(this.baseUrl+url));
    }
}

export  const Todo = new todo();