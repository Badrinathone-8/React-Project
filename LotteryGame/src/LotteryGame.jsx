import {useState} from "react"
import default function LotteryGame(){


    function Lottery({n,winningSum}){
    function random(){
            let arr=new Array[n];
       for(let i=0;i<n;i++){
         arr[i]=Math.floor(Math.random()*10);
       }
    }


return arr;
    }
function sum({arr}){
   return  arr.reduce((el,idx)=>el+idx,0);
    
}
let [ticket,setTicket]=useState(random(n));
function buyTicket(){
    setTicket(random(3));
}
return(
    <>
    <h1>Lotttery Game</h1>
    <button onClick={}></button>
    </>
)
}
