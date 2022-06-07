import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);

  // API call using XMLHttpRequest
  // useEffect(() => {
  //   let request = new XMLHttpRequest();
  //   request.open("GET", "https://jsonplaceholder.typicode.com/users");
  //   request.send();
  //   request.onload = () => {
  //     console.log("REQUEST", request);
  //     if(request.status === 200) {
  //       const userList = JSON.parse(request.response);
  //       setUsers(userList);
  //     }
  //   }
  // }, []);

  // API call using fetch .then method
  // useEffect(() => {
  //   fetch("", 'https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     return res.json();
  //   }).then(res => {
  //     const userList = res
  //     setUsers(userList);
  //   }).catch(err => {
  //     console.log("ERROR", err);
  //   })
  // }, [])

  // const getUserData = async() => {
  //   const resposne =  await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await resposne.json();
  //   console.log("DATA", data)
  //   setUsers(data);
  // }

  const getUserData = async() => {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = await response.data;
    setUsers(data);
  }

  useEffect(() => {
    getUserData();
  }, [])

  // axios.get("https://jsonplaceholder.typicode.com/users")
  // .then(res => {
  //   setUsers(res.data);
  // }).catch(err => {
  //   alert("ERROR");
  // });

  return (
    <div className="App">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          {users?.map((item) => (
            <div key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td> {item.address.city} </td>
              </tr>
            </div>
          ))}
        </table>
    </div>
  );
}

export default App;
