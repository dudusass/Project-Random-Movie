import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/";
import Header from "../../components/Header/";
import axios from "axios";


function Home() {
const [data, setData] = useState([])
const MYURL = ''

useEffect(() => {
  axios.get(MYURL)
  .then(respnse => respnse.json())
  .then(data => {
    setData(data);
  })
}, [])


  return (
    <div>
      <Header />
      <ul>
        {data.map(movies => {
          <li key={movies}>
            <strong>{movies}</strong>
          </li>
        })}
      </ul>
      <Footer />
    </div>
  )
}

export default Home;