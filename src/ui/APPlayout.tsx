import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";

function APPlayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header />

      <AnimatePresence mode="wait">
        <motion.main key={location.pathname}>
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default APPlayout;
