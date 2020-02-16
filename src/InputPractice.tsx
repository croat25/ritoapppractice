import React, {useState } from 'react';
import './App.css';

const InputPractice = () => {
    const [greeting, setGreeting] = useState(
        'Hello Function Component!'
      );

      const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setGreeting(event.target.value);
    return (
        <div>
      <h1>{greeting}</h1>
      <input
        type="text"
        value={greeting}
        onChange={handleChange}
      />
    </div>
    )
}

export default InputPractice