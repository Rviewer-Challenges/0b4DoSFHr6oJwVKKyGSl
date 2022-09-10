import React, { useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const MARVEL_PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const MARVEL_PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

function Main () {
  
  //const [ url, setUrl ] = useState("https://pokeapi.co/api/v2/");
  const [ url, setUrl ] = useState("https://rickandmortyapi.com/api/character");
  //const [ url, setUrl ] = useState("https://jsonplaceholder.typicode.com/posts");
  //const [ url, setUrl ] = useState(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${MARVEL_PUBLIC_KEY}&hash=3db9829a2fb26a38885778f4cd7469ac`);
  
  const [ result, setResult ] = useState(["primera prueba"]);

  const handleButton = async () => {

    const resp = await axios.get(url)
    setResult(resp.data);
    console.log(result);
    //console.log(result.data);
  
    await axios({
      method: "POST",
      data:  result,
      //withCredentials: true,
      url: "http://localhost:5000/json"
      //url: SERVER_URL + "/json"
    }).then((res) => {
      console.log(res.data);
      
    }).catch((error) => {
      console.log(error);
    })

  };

  useEffect (() => {

    const getApi = async () => {
      const resp = await axios.get(url)
      setResult(resp.data);
      console.log(result);
    };
    getApi();

  },[]);

  return (
    <main className="main">
      <p>Kaixo</p>
      <button onClick={handleButton}>Obtener API</button>
    </main>
  )
}

export default Main;