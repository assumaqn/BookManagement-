import { motion } from "framer-motion";
import HomeHeader from "./HomeHeader";

import HomeRecommend from "./HomeRecommend";
import HomeStatues from "./HomeStatues";

function Home() {
  return (
    <motion.div
      layout
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="mx-auto flex max-w-[1300px] flex-col gap-28 px-6 py-11"
    >
      <HomeHeader />
      <HomeStatues />
      <HomeRecommend />
    </motion.div>
  );
}

export default Home;
