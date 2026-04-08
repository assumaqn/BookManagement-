import HomeHeader from "./HomeHeader";
import HomeRecommend from "./HomeRecommend";
import HomeStatues from "./HomeStatues";

function Home() {
  return (
    <div className="mx-auto flex max-w-[1300px] flex-col gap-28 px-6 py-11">
      <HomeHeader />
      <HomeStatues />
      <HomeRecommend />
    </div>
  );
}

export default Home;
