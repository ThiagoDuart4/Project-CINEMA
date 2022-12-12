import React from "react";
import { Link } from "react-router-dom";
import '../Feed/feed.css'
import Footer from "../../Components/Footer/Footer";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import api from "../../services/Api";
import { useEffect, useState } from "react";
import close from "../../Images/close.png";
import edit from"../../Images/editing.png";





function Feed() {


   const [post, setPosts] = useState([]);

   useEffect(() => {
      api
         .get("https://test-api-fawn.vercel.app/filmes")
         .then((response) => {
            setPosts(response.data);

         });

   }, []);

   function  deleteFilmes(id){

      api.delete(`https://test-api-fawn.vercel.app/filmes/${id}`)
      
      setPosts(post.filter(post =>post.id !== id))
   }



   return (
      <div className="container">
         <main>

         <HeaderMain></HeaderMain>

            <div className="filmes">



               {
                  post.map((post, key) => {

                     return( 
                     
                     <div className="filme" key={key}>
                        <section>
                           <img src={post.image} alt="" />
                        </section>
                        
                        <section className="text-filmes">  
                              <h1>{post.nome}</h1>
                           <h5> {`${post.ano}/ ${post.duração}/${post.gênero} `}</h5>
                         
                        
                           <span>{`Direção:${post.direção}`}</span>
                        <h6> {`Roteiro:${post.roteiro}`} </h6>
                           <h4>{`Elenco:${post.elenco}`}</h4>
                           <p>
                              {post.sinopse}
                           </p>

                           <Link to="/edit"  className="edit-btn"> <img src={edit}></img></Link>
                           
                           <img  src={close} className="Delete-btn" onClick={() => deleteFilmes(post.id)}></img>
                        </section>
                     


                     </div>)
                    
                  })
               }



            </div>
            <Footer></Footer>
         </main>
         
      </div>
   )
}
export default Feed;