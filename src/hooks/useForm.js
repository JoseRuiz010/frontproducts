import   { useState } from 'react'

export const useForm = (initialState={}) => {
    const [data, setdata] = useState(initialState)
  
    const onchange=({value, name})=>{
    setdata({...data, [name]:value})
    }

    return(
        {
            onchange,data
        }
    )
}
