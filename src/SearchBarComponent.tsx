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
      setName(inputComponent?.value);
  }
 
  let inputComponent: HTMLInputElement | null;
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={(comp => inputComponent = comp)}
      />
    <input type="submit" value="Submit" />
  </form>
  )
}
 
 export default SearchBarComponent