import { useEffect } from "react";



const DynamicTitle = (title) => {
    useEffect(()=>{
        document.title = `Toytopia | ${title}`
    },[title])
}

export default DynamicTitle ;
