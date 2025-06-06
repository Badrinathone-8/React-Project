export default function Even({num}){
    
    return(
        <>
        <h1>Even Number</h1>
        <h2>Number is :{num}</h2>
        <h4>{num%2==0?"Even Number":"Odd Number"}</h4>
        </>
    )
}
