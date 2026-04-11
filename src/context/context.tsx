import { createContext, ReactNode, useContext, useReducer } from "react";
import toast from "react-hot-toast";
import { Books } from "../data/data";

type Book = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  category: string;
  isReading: boolean;
  description: string;
};

type State = {
  vault: Book[];
  Goal: number;
  searchQuery: string;
};

type Action =
  | { type: "added to vault"; payload: Book }
  | { type: "toggleRead"; payload: number }
  | { type: "DeleteBook"; payload: number }
  | { type: "annualGoal"; payload: number }
  | { type: "search"; payload: string };

type ContextType = {
  vault: Book[];
  Goal: number;
  searchQuery: string;

  AddToVault: (book: Book) => void;
  ToggleRead: (id: number) => void;
  DeleteBook: (id: number) => void;
  handelGoal: (goal: number) => void;
  handleSearchQuery: (query: string) => void;
};
const initialState: State = {
  vault: [],
  Goal: 0,
  searchQuery: "",
};

const BookContext = createContext<ContextType | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "added to vault":
      if (state.vault.some((book) => book.id === action.payload.id)) {
        return state;
      }

      return {
        ...state,
        vault: [...state.vault, action.payload],
      };
    case "toggleRead":
      return {
        ...state,
        vault: state.vault.map((book) =>
          book.id === action.payload
            ? { ...book, isReading: !book.isReading }
            : book,
        ),
      };
    case "DeleteBook":
      return {
        ...state,
        vault: state.vault.filter((book) => book.id !== action.payload),
      };
    case "annualGoal":
      return {
        ...state,
        Goal: action.payload,
      };
    case "search":
      return {
        ...state,
        searchQuery: action.payload,
      };

    default:
      return state;
  }
}

function BookState({ children }: { children: ReactNode }) {
  const [{ vault, Goal, searchQuery }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function AddToVault(book: Book) {
    const current = Books.find((el) => el.id == book.id);

    dispatch({ type: "added to vault", payload: book });
    toast.success(
      <>
        <strong className="mr-2">{current?.title} </strong>{" "}
        <span>has been added to your vault!</span>
      </>,
    );
  }
  function ToggleRead(id: number) {
    dispatch({ type: "toggleRead", payload: id });
  }
  function DeleteBook(id: number) {
    const current = vault.find((book) => book.id == id);
    dispatch({ type: "DeleteBook", payload: id });
    toast.success(
      <>
        <strong className="mr-2">{current?.title} </strong>{" "}
        <span>has been removed from your vault</span>
      </>,
    );
  }

  function handelGoal(goal: number) {
    dispatch({ type: "annualGoal", payload: goal });
  }

  function handleSearchQuery(query: string) {
    console.log(query);
    dispatch({ type: "search", payload: query });
  }
  return (
    <BookContext.Provider
      value={{
        vault,
        AddToVault,
        ToggleRead,
        DeleteBook,
        Goal,
        handelGoal,
        searchQuery,
        handleSearchQuery,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

function useBook() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be used within a BookState provider");
  }
  return context;
}

export { useBook };
export default BookState;
