import React, {useState, useEffect} from 'react';
import './App.css';

const SearchBarComponent = (props: any) => {
  const [name, setName] = useState("");
  
  const handleSubmit = (evt: { preventDefault: () => void; }) => {
      evt.preventDefault();
      alert(`Submitting Name ${name}`)
  }
    return (
      <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
      //   <div className="SearchComponent">
      //   <h1>{count}</h1>
      //   <button type="button" onClick={handleIncremet}>
      //   Increment
      // </button>
      // <button type="button" onClick={handDecrement}>
      //   Decrement
      // </button>

      // <input type="text"></input>
      // </div>
    )
}

export default SearchBarComponent