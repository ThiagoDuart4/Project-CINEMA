import React from "react";
import { Link } from "react-router-dom";
import '../Feed/feed.css'
import Footer from "../../Components/Footer/Footer";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import api from "../../services/Api";
import { useEffect, useState } from "react";





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

   console.log(post)

   return (
      <div className="container">
         <HeaderMain></HeaderMain>
         <main>

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

                           <Link to="/edit"  className="edit-btn"> <button>Edit</button></Link>
                           
                           <button  className="Delete-btn" onClick={() => deleteFilmes(post.id)}>delete</button>
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