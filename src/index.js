import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css/bundle";

import LerMais from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";
import Feed from "./pages/Feed/Feed";
import Post from "./pages/Post/Post";

import './styles/global.css'


// eslint-disable-next-line
import "swiper/css/bundle";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index path="feed" element={<Feed />} />
          <Route path="edit" element={<Edit />} />
          <Route path="/" element={<LerMais />} />
          <Route path="post" element={<Post/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);