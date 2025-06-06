import { useState } from "react";
import './Ludo.css'
export default function ludo(){
    let [moves,setMoves]=useState({red:0,green:0,blue:0});
    function upRed(){
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1}
        })
    }
    function upGreen(){
        setMoves((prevMoves)=>{
             console.log(prevMoves);
            return {...prevMoves,green:prevMoves.green+1};
           
        })
    }
    function upBlue(){
        setMoves((prevMoves)=>{
            return{...prevMoves,blue:prevMoves.blue+1};
        })
    }
    return(
        <>
        <div>
            <button onClick={upRed} style={{backgroundColor:"red",color:"pink"}}>red:{moves.red}

            </button>
            <button onClick={upGreen} style={{backgroundColor:"green",color:"white"}}>Green:{moves.green}

            </button>
            <button onClick={upBlue} style={{backgroundColor:"blue",color:"red"}} >Blue:{moves.blue}

            </button>
        </div>
        </>
    )
        
}
