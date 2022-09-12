import React, { useState, useEffect } from "react";
import axios from "axios";
import './Main.css';

//const MARVEL_PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
//const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
//const SERVER_URL = process.env.REACT_APP_SERVER_URL;
//const DB_MONGO = process.env.REACT_APP_MONGO_URI;

function Main () {
  
  //const [ url, setUrl ] = useState("https://pokeapi.co/api/v2/");
  const [ url, setUrl ] = useState("https://rickandmortyapi.com/api/character");
  //const [ url, setUrl ] = useState("https://jsonplaceholder.typicode.com/posts");
  //const [ url, setUrl ] = useState(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=3db9829a2fb26a38885778f4cd7469ac`);
  
  const [ result, setResult ] = useState(["primera prueba"]);
  const [ tabla, setTabla ] = useState("");

  useEffect (() => {
    const getApi = async () => {
      const resp = await axios.get(url)
      setResult(resp.data);
    };
    getApi();
  },[url]);
  console.log(result);
  
  const handleButton = async () => {
    const resp = await axios.get(url)
    setResult(resp.data);
    console.log(result);
    //console.log(result.data);
    await axios({
      method: "POST",
      data:  {
        resultado: result, 
        tabla: tabla
      }, 
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*' 
      },
      url: "http://localhost:5000/json"
      //url: SERVER_URL + "/json"
    }).then((res) => {
      console.log(res.data);
      
    }).catch((error) => {
      console.log(error);
    })
  };

  const handleSubmit = async (event) => {
    event.prevenDefault();
  };

  return (
    <main className="main">
      <form className="configuracion" onSubmit={handleSubmit}>
        <p>Kaixo</p>
        <button onClick={handleButton}>Obtener API</button>

        <label htmlFor="bd">Dirección BDD Mongo</label>
        <input type="text" name="bd" placeholder="Todavía en desarrollo..." /* value={BORRAR} *//>

        <label htmlFor="tabla">Nombre de la tabla</label>
        <input type="text" name="tabla" onChange={ e => setTabla(e.target.value) } />
        
        <label htmlFor="description">Resultados</label>
        <input type="text" name="description" placeholder="Ver por consola..."/>

        <input className="submitBt" type="submit" disabled />
      </form>
    </main>
  )
}

export default Main;