export default  function ChangeMode(){
    function change(){
        <h1>COlor Changed</h1>
        console.log("color changed");
       // let styles={backgroundColor:"red"};
      
        
    }

    return(
        <>
        <h1>DarkMode</h1>
        <button onClick={change}>Change</button>
        </>
    )
}