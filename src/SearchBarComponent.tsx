import React, {useState, useEffect} from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';
 
 const SearchBarComponent = (props: any) => {
   const [name, setName] = useState<string | undefined>(undefined);

   if (name) {
     return <Redirect to={`/search/${name}`} push />
   }
 
   const handleSubmit = (evt: { preventDefault: () => void; }) => {
       evt.preventDefault();
       // alert(Submitting Name ${name})
       setName(inputComponent?.value);
   }
 
   let inputComponent: HTMLInputElement | null;
 
     return (
       <form onSubmit={handleSubmit}>
       <label>
         Frirst Name:
         <input
           type="text"
           ref={(comp => inputComponent = comp)}
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