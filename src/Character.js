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
          return <div className="items">
          
            
          <h1 className="head">{item.name}</h1>
            <img src={item.img} alt="character"className="card"/>
            
            <b>Nickname: {item.nickname}</b><br/>
            <b>Date of Birth: {item.birthday}</b><br/>
            <b>Status: {item.status}</b><br/>
          
            <b>Portrayed by: {item.portrayed}</b><br/>
            <b>Appearances</b><br/>
            <p>{item.appearances}</p>
            <Quote author = {item.name}/>
            </div>
            
          
        })
      }

      
    </div>
}

export default Character