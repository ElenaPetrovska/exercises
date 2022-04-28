import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { ToDo } from './components/Todos/Todo';

const App = () => {
    const [data,setData]=useState([])
    
    const getData = () =>{
        let data = []

          axios ({
              metod: 'get', 
              url: 'https://jsonplaceholder.typicode.com/todos'

          })
          .then (response => {
              console.log(response.data)
              setData(response.data)
              
          })

    }
    useEffect(()=>{
      getData();

    },[])

    return (
        <div>
            <h1 className="title"> Todo list </h1>
            {data.map(obj => <ToDo title = {obj.title} />)} 
         
        </div>
    )
}

export default App;