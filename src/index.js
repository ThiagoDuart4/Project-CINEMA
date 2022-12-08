import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css/bundle";

import LerMais from "./pages/LerMais/LerMais";
import Edit from "./pages/Edit/Edit";
import Feed from "./pages/Feed/Feed";
import Post from "./pages/Post/Post";

import './styles/global.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index path="/" element={<Feed />} />
          <Route path="edit" element={<Edit />} />
          <Route path="lermais" element={<LerMais />} />
          <Route path="post" element={<Post/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);