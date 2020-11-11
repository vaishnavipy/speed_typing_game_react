
import './App.css';
import React,{useState,useEffect} from "react"

function App() {

  const [input,setInput] = useState("");
  const [start,setStart] = useState(false);
  const [timer,setTimer] = useState(5);
  const [wordCount,setWordCount] = useState(0);

  function handleChange(event){

    setInput(event.target.value)


  }

  function handleClick(){

   setStart(true);
   setTimer(5)
    setInput("");
  }
  function endGame(){
  
   
   
    setStart(false);
    setWordCount(countWords())

  } 
  function countWords(){

    let wordCoutarray = input.trim().split(" "); // Split them at spaces to get the number of words
    return wordCoutarray.filter(words => words.length>1).length;

  }


    useEffect(() => {

      if(start){

     const intervalID = setTimeout(()=> {

      setTimer(prevTimer => prevTimer-1)

     },1000)

     if(timer == 0){
     clearTimeout(intervalID)
      endGame()


     } 
    
     }
      
    },[timer,start])




  return (
        <div className="container">
          <h1>How Fast Do You Type ?</h1>


        <textarea rows={8} value={input} onChange={handleChange} disabled={!start}/> 

        <h4>Time Remaining: {timer}</h4>

      { start ?  <button onClick={handleClick} disabled>START</button> : <button onClick={handleClick} >START</button> }
      <h1>Word Count: {wordCount}</h1>
        </div>
  );
}

export default App;
