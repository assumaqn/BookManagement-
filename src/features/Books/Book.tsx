import BookDisplay from "./BookDisplay";
import BookHeader from "./BookHeader";
import BookNav from "./BookNav";

function Book() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-10 px-6 py-11">
      <BookHeader />
      <BookNav />
      <BookDisplay />
    </div>
  );
}

export default Book;
