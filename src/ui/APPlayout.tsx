import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function APPlayout() {
  return (
    <>
      <div className="bg-gray-50bg-gray-900 text-white">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default APPlayout;
