/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import axios from "axios";
import {firestore} from "./firebase"
import {addDoc, collection} from "firebase/firestore";
import './App.css';
import { FaSistrix} from "react-icons/fa";

function FetchAPI() {
  const [data, setData] = useState([])
  //useStae - add the retrieved data to state and pass it to a child component
  const [id, setId]=useState(0);
  //search id
  const [search, setSearch] = useState("")
  //search text
  const ref = collection(firestore,"searchHistory");
  //firestore db
  const apiGet = () => {
    const fetchData = async () => {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", { 
        //get request
        //await - wait until the promise settles with the result
        //axios - connects to an endpoint
        //
          params: {
            api_key: "wkGboF2xKi4l7E35Y13XQynBkVEnJDCj",
            limit: 10
            //data
          }
        });
        setData(results.data.data);


    };

    fetchData();
  };
  
useEffect(() => {
  //useEffect runs after the component is rendered
  apiGet();
  localStorage.setItem(id, JSON.stringify(search));
  //react local storage
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[search])
//[] - the code doesn’t run in an infinite loop
//argument - render if certain values have changed

const renderGifs = () => {

  return data.map(el => {
    return (
      <div key={el.id} >
        <img src={el.images.fixed_height.url} alt="" className="gif"/>
      </div>
      //display data
    );
  });
};

const handleSearchChange = event => {
  setSearch(event.target.value);
  //input values
};

const handleSubmit = async event => { 
  event.preventDefault();
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "wkGboF2xKi4l7E35Y13XQynBkVEnJDCj",
        q: search,
        limit: 10
      }
    });
    
    setData(results.data.data);

  setId(prevState => prevState + 1);
  
  let data = {
    Id:id,
    Text:search,
  }
  //assign data keys and values
  addDoc(ref, data);
};

return (
  
  <div className="m-2">
    <form className="form-inline justify-content-center m-2">
      <h1 className="title">Hi! Search your favorite Gifs!&#128522;</h1>
    <div className="search-box">
      <input
        value={search}
        onChange={handleSearchChange}
        type="text"
        placeholder="Search"
        className="search-input"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="search-btn">
        <FaSistrix/>
      </button>
      </div>
    </form>
    <div className="container-gifs">{renderGifs()}</div>
  </div>
);
};

export default FetchAPI;