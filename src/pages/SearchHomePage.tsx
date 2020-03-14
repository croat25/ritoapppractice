import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
 
const SearchHomePage = (props: any) => {
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
    <form onSubmit={handleSubmit} className="yoloswag420">
      <input
        type="text"
        ref={(comp => inputComponent = comp)}
      />
    <input type="submit" value="Submit" />
  </form>
  )
}
 
 export default SearchHomePage