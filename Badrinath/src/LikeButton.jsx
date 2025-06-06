import { useState } from "react"
export default function Like(){
    let [color,changeColor]=useState(false);
    let  toggle=()=>{
        changeColor(!color);
    }
    let redColor={
        backgroundColor:"red",
        Color:"black"
    }
    let blueColor={
        backgroundColor:"blue",
        color:"yellow",
        width:"20px",
    }
    return(
        <>
        <h1>Button</h1>
        <button onClick={toggle}
         style={!color?redColor:blueColor}>clickme
        
        </button>
        </>
    )
}
