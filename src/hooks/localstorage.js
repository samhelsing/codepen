import  {useEffect, useState} from "react";


export default function useLocalStorage(key, initialValue) {
    const PREFIX = 'CP-Local'
    const prifixKey = PREFIX + key
    const [value, setValue] = useState(()=>{
        const storedHtml  = localStorage.getItem(prifixKey)
        if(storedHtml) return JSON.parse(storedHtml)

        if(storedHtml){
            setValue(storedHtml)
        }else{
            return initialValue
        }
    })
    useEffect(()=>{
        localStorage.setItem(prifixKey, JSON.stringify(value))
    })
  return [value, setValue]
}

