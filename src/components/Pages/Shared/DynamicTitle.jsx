import { useEffect } from "react";



const DynamicTitle = (title) => {
    useEffect(()=>{
        document.title = `Website | ${title}`
    },[title])
}

export default DynamicTitle ;
