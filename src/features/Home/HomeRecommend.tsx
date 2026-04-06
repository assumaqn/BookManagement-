import RecentBook from "./RecentBook";
import Wishlist from "./WishList";

function HomeRecommend() {
  return (
    <div className="flex items-start justify-between gap-10">
      <RecentBook />
      <Wishlist />
    </div>
  );
}

export default HomeRecommend;
