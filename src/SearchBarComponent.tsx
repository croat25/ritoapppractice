import React, {useState, useEffect} from 'react';
import './App.css';

const SearchBarComponent = () => {
    const[count, setCount] = useState(0);
    const handleIncremet = () => setCount(currentCount => currentCount + 1);
    const handDecrement = () => setCount(currentCount => currentCount - 1);
    useEffect(() => setCount(currentCount => currentCount + 1), []);


    return (
        <div className="SearchComponent">
        <h1>{count}</h1>
        <button type="button" onClick={handleIncremet}>
        Increment
      </button>
      <button type="button" onClick={handDecrement}>
        Decrement
      </button>

      <input type="text"></input>
      </div>
    )
}

export default SearchBarComponent