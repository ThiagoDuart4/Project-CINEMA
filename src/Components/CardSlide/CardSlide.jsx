import api from "../../services/Api";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../CardSlide/cardslide.css";

// import required modules
import { Pagination } from "swiper";

function CardSlide() {


  const [post, setPosts] = useState([]);

  useEffect(() => {
     api
        .get("https://test-api-fawn.vercel.app/filmes")
        .then((response) => {
           setPosts(response.data);

        });

  }, []);



  return(


  
  <>
    <Swiper
      slidesPerView={5}

      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      
      >
      {
        post.map((post,key)=>{

            return(
             <SwiperSlide><img src={post.image} alt="" /></SwiperSlide>
            )
        })
      }
    </Swiper>
</>
  )
  
}

export default CardSlide


    
