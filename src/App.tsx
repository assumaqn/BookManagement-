import { BrowserRouter, Route, Routes } from "react-router-dom";
import APPlayout from "./ui/APPlayout";
import HomePage from "./Pages/HomePage";
import BooksPage from "./Pages/BooksPage";
import PageVault from "./Pages/PageVault";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<APPlayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />

            <Route path="/vault" element={<PageVault />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          style: {
            fontSize: "12px",
            color: "#555",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "bg-gray-100",
          },
        }}
      />
    </>
  );
}

export default App;
