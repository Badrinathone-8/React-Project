export default function ArraysToProps() {
    let arr=[1,2,3,4,5];
    return (
        <>
        <h1>Array of Elements</h1>
        <ul>
            <li>{arr.map((el)=>(
                <p>{el}</p>))}</li>
        </ul>
        </>
    );
}
