import HomeHeader from "./HomeHeader";
import HomeStatues from "./HomeStatues";

function Home() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-40 px-6 py-11">
      <HomeHeader />
      <HomeStatues />
    </div>
  );
}

export default Home;
