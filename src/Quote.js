import React, {useEffect, useState} from 'react'
import './App.css'

function Quote({author}) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let arr = author.split(" ");
    let tag = arr[0] + "+" + arr[1];
    console.log(tag);
    useEffect(() => {
        fetch("https://breakingbadapi.com/api/quote?author=" + tag)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(items);
            },
            
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [tag])


    return (
        <div>
            <h1>Quotes</h1>
            {items.map((item)=> {
                return <div>
                <h3 className="quotes">{item.quote}</h3>
                </div>
                
            })}
        </div>
    )
}

export default Quote
