import { BrowserRouter, Route, Routes } from "react-router-dom";
import APPlayout from "./ui/APPlayout";
import HomePage from "./Pages/HomePage";
import Books from "./Pages/Books";
import Vault from "./Pages/Vault";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<APPlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/vault" element={<Vault />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
