// UseFef
import {useEffect, useRef,useState} from 'react';


// const UseRef = () => {
//     // let countRef=useRef(0);
//     let inputRef=useRef()

//     useEffect(()=>{
//         console.log(inputRef.current);
//     },[])

//     const handel=()=>{
//     //  let res=countRef.current++
//     let res=inputRef.current.focus()
//         console.log(res)
//     }
 
//     console.log("rendered")
//     return ( 
//         <div>
//             <input type="text" ref={inputRef}/>
//            <button onClick={()=>{handel()}}>click me </button>     
//         </div>
//      );
// }




////////

// function UseRef() {
//     const [inputValue, setInputValue] = useState("");
//     const previousInputValue = useRef("");
    
//     useEffect(() => {
//         previousInputValue.current = inputValue;
        
//     }, [inputValue]);

//     return (
//         <>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h2>Current Value: {inputValue}</h2>
//             <h2>Previous Value: {previousInputValue.current}</h2>
//         </>
//     );
// }




/////////////////useRef3
// for jlogiri az render mojadad for render for each change
function UseRef() {
    const[name,setName]=useState('')
    // const renderCount=useRef(0);
    const inputRef=useRef()

    function focus() {
        inputRef.current.focus()
       console.log(inputRef.current.focus());
    }
    // useEffect(()=>{
    //     // setRenderCount(preRenderCount=>preRenderCount+1)
    //     // renderCount.current=renderCount.current+1
    // })
    return(
        <>
        
          <input ref={inputRef} value={name}onChange={e=>setName(e.target.value)}/>
          <div>my name is {name}</div>
          <button onClick={focus}>focus</button>
        
        </>
    )
    
}
console.log("render");
 
export default UseRef;