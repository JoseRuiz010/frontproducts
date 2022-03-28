import { useEffect, useState } from "react";


export const useFetchHooks = (url) => {
    const [data, setdata] = useState()

    useEffect(() => {
      
    async function getData (){
        const data = await fetch(url).then(data=>data.json())
        setdata(data);
    }
      
    getData()
    }, [url])
    
    return data
}

