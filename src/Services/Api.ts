
class Api {
    baseUrl: string;

    constructor(baseUrl: string)
    {
        this.baseUrl = baseUrl
    }
    
    fetch = async (url: string,body?: any,method?: string) => {
        const response = await fetch(this.baseUrl+url,
            {
                method: method,
                headers: {
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                },
                body : JSON.stringify(body)
            })

        const result = await response.json();
        return result;  
    }
    get = async (url: string,body?: any,method='GET') => {
        return this.fetch(url,body,method)
    }

    post = (url: string,body: any,method = 'POST')=>{
        return this.fetch(url,body,method)
    }
    put = (url: string,body: any,method = 'PUT')=>{
        return this.fetch(url,body,method)
    }
    patch = (url: string,body: any,method = 'PATCH')=>{
        return this.fetch(url,body,method)
    }
    delete = (url: string,body?:any, method = 'DELETE')=>{
        return this.fetch(url,body,method)
    }

}

const baseUrl = 'http://localhost:8000/api/';
export const API = new Api(baseUrl);