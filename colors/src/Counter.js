import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Counter(){
    const [counter,setCounter] = useState(0);
return(
<>
<h1>this is my counter{counter}</h1>


<button type="button"  className="btn btn-primary btn-sm mx-3 px-5 py-3 mt-2 $blue-500" onClick={()=>setCounter(counter => counter +1)}>INCREASE</button>



<button className = "btn btn-success btn-lg mx-2 px-2 py-2 mt-1 $yellow-500" onClick={() => setCounter((counter) => counter -1)}>DECREASE</button>


</>
)
}
export default Counter;