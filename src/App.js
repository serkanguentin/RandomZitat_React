import { useState ,useEffect} from "react";
import './App.css'


function App() {
const [A , setA] =useState("");

 const getA =()=> {
  fetch ("https://type.fit/api/quotes")
  .then((res)=>res.json())
  .then((data)=>{
    let randomnummer=Math.floor(Math.random()* data.length)
    setA(data[randomnummer])
  })
 }
 useEffect(() => {
  getA();
}, [])

  return (
    <div className="App">
     <div className='quote'>

<p>{A.text}</p>
<p>{A.author}</p>

<div className='btnContainer'>
  <button onClick={getA} className="btn">Get Quote</button>
</div>

</div>
    </div>
  );
}

export default App;
