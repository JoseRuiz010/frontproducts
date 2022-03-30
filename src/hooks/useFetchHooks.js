import { useEffect, useState } from "react";


export const useFetchHooks = (url,dataBody) => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)
    
 
   const body= url.method==='GET'?{
    method: url.metodo,
    headers:{
        'Content-Type': 'application/json'
      }
   }:{
    method: url.metodo,
    headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(dataBody)
   }

    useEffect(() => {
        async function getData() {
            try {
                setloading(true)
                const data = await fetch(url.url,body).then(res => res.json())
                setdata(data);
                setloading(false);
            } catch (error) {
             seterror(error)
            }finally{
                setloading(false)
            }
        }

        getData()
    }, [url])

    return { data, loading, error }
}

