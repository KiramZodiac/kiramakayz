import React from "react";
import {BrowserRouter as router,routes,route,Link} from 'react-router-dom'
import { useState,useEffect } from "react";





export default function App(){
    
    
    const [color, setColor] = useState("yellow");
    const [counter,setCounter] = useState(0);
    const datt = Date();
const [size,setSize] = useState(500);


return(
<>
<h1>hello the color is {color}{counter}{datt}</h1>
<h2>{datt}</h2>
<div style={{
    width: 200,
    height: 200,
    backgroundColor: color,
    borderRadius: 100,
    size:size,
    
}}></div>

<button type ="button" onClick={(()=>setCounter((counter +1) ))}>add</button>

<button type="button" onClick= {() => setColor("yellow")}>yellow </button>
<button type="button" onClick= {() => setColor("red")}> red</button>
<button type="button" onClick= {() => setColor("green")}>green</button>
<button type="button" onClick = {() => setColor("orange")}>orange</button>
<button type="button" onClick= {() => setColor("pink")}>pink</button>
<button type="button" onClick={() =>setSize(400)}>size</button>

<button type="button"onClick={() =>Date()}>today is</button>

</>  
)};