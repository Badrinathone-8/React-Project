import { useState } from "react";
export default function CountPlus(){
    let [count,countInc]=useState(0);

    let incriment=()=>{
        countInc((curr)=>{
        return curr+1;
        })
    }
    return(
        <>
        <div>
            <button onClick={incriment}>Count</button>
            <p>{count}</p>
        </div>
        </>
    )

}

