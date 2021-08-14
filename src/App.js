
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState("none");

  useEffect(() => {
    var offSet = start.toString();
    
    
    var link = "https://breakingbadapi.com/api/characters?limit=10&offset=" + offSet;
    
    if(category!=="none"){
      if(category === 'better_call_saul'){
        link = link + "&category=Better+Call+Saul";
      }
      else{
        link = link + "&category=Breaking+Bad";
      }
    }

    fetch(link)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [start, end, category])
  
  
  function add10(){
    var curr = start;
    if(curr<60){
      setStart(curr+10);
      setEnd(end+10);
    }
  }

  function sub10(){
    if(start>0)
    {
      setStart(start-10);
      setEnd(end-10);
    }
  }

  function categoryChange(event){
    setCategory(event.target.value);
    setStart(0);
  }

  return (
    <div>
      
      <select value={category} onChange={categoryChange} className="option" >
       
        <option value="Select Option" >Select Option</option>
        <option value="better_call_saul" >Better Call Saul</option>
        <option value="breaking_bad" >Breaking Bad</option>
      </select>
      
      {
        items.map((item)=>{
          return <div>
          
          <p>{item.name} {item.occupation} {item.birthday} {item.status} <a href={"/"+item.char_id}>Read More</a></p>
            </div>
            
          
        })
      }
      
      <button onClick={sub10} className="foot">Previous</button>
      <button onClick={add10} className="foot">Next</button>
    </div>
  );
}

export default App;
