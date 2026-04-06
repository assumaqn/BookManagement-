import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function APPlayout() {
  return (
    <>
      <div className="bg-stone-100">
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
