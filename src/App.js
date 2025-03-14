import { BrowserRouter, Routes, Route } from "react-router-dom";


import AnimeItemPage from "./Components/AnimeItem/AnimeItem.page";
import HomePage from "./Components/HomePage/Home.page";
import GalleryPage from "./Components/Gallery/Gallery.page";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/:id" element={<AnimeItemPage />} />
        <Route path="/character/:id" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

