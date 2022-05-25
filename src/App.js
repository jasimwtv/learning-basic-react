import './App.css';
import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState({
    name: "asdf",
    email: "",
    role: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    if(value) {
      setValue(state => ({
        ...state,
        [name]: value
      }))
    }

  }

  return (
    <div className="App">
        <form>
          <input name="name" placeholder="Name" type="text" onChange={handleInput} />
          <input name="email" placeholder="Email" type="email" onChange={handleInput} />
          <input type="text" placeholder="Role" name="role" onChange={handleInput} />
        </form>
        <div>
          Information
          <h2>{value.name}</h2>
          <p>{value.email}</p>
          <p>{value.role}</p>
        </div>
    </div>
  );
}

export default App;
