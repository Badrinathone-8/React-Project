import {useState} from "react"
function rand(){
    return Math.floor(Math.random()*10);
}
export default function Demo(){
    let [change,setChange]=useState(rand());
    let set=()=>{
        setChange((curr)=>{
            return curr;
        })
    }
    return(
        <>
      <h2>Random Numbers</h2>
      <h4>{change}</h4>
        </>
    )
}

