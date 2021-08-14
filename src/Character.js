import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router'
import Quote from './Quote';
import "./App.css"
function Character(){
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    let {char_id} = useParams();
    console.log(char_id);

    useEffect(() => {
        fetch("https://breakingbadapi.com/api/characters/" + char_id)
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
      }, [char_id])

      
    
    return <div>
        {
        items.map((item)=>{
          return <div>
          
            
            <h1>{item.name}</h1>
            <img src={item.img} alt="character" className="card"/>
            <h3>Date of Birth: {item.birthday}</h3>
            <h4>Status: {item.status}</h4>
            <h6>Nickname: {item.nickname}</h6>
            <h3>Portrayed by: {item.portrayed}</h3>
            <h3>Appearances</h3>
            <p>{item.appearances}</p>
            <Quote author = {item.name} />
            </div>
            
          
        })
      }

      
    </div>
}

export default Character