import { BrowserRouter, Route, Routes } from "react-router-dom";
import APPlayout from "./ui/APPlayout";
import HomePage from "./Pages/HomePage";
import BooksPage from "./Pages/BooksPage";
import PageVault from "./Pages/PageVault";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<APPlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />

          <Route path="/vault" element={<PageVault />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
