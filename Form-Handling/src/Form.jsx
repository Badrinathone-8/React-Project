import {useState} from "react";

export default function form(){
    let[msg,setMsg]=useState({
        user:" ",id:" "
    })

function change(event){
   let fullname=

}
    return(
        <>
        <h2>Form Example</h2>
        <div>
            
            <form>
                <label htmlFor="name">enter</label>
                    <input  type="text" value={msg} onChange={change} id="name"></input>
                <br></br>
                <br></br><button>Submit</button>

            </form>
        </div>
        </>
    )
}
