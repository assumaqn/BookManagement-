import BookCard from "../../ui/BookCard";

function VaultBooks() {
  const books = [
    {
      id: 1,
      title: "The Silent Peak",
      author: "Kumneger",
      image: "/random-2.png",
    },
    {
      id: 2,
      title: "The Silent Peak",
      author: "Kumneger",
      image: "/Random.png",
    },

    {
      id: 4,
      title: "The Silent Peak",
      author: "Kumneger",
      image: "/random-6.png",
    },
    {
      id: 5,
      title: "The Silent Peak",
      author: "Kumneger",
      image: "/random-5.png",
    },
    {
      id: 5,
      title: "The Silent Peak",
      author: "Kumneger",
      image: "/random-4.png",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-x-5">
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
}

export default VaultBooks;
