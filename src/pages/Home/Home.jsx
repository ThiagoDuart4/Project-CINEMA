import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import SliderMain from "../../Components/SliderMain/slider";
import CardSlide from "../../Components/CardSlide/CardSlide"
import './home.css'
import api from "../../services/Api";
import { useEffect, useState } from "react";





function Home() {


  

  const [post, setPosts] = useState([]);

  useEffect(() => {
     api
        .get("https://test-api-fawn.vercel.app/filmes")
        .then((response) => {
           setPosts(response.data);

        });

  }, []);



  return (
   
    <div>
     

  <HeaderMain></HeaderMain>
  
    <CardSlide></CardSlide>







</div>)

  }

  export default Home;