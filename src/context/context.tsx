import { createContext, ReactNode, useContext, useReducer } from "react";

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
};

type Action =
  | { type: "added to vault"; payload: Book }
  | { type: "toggleRead"; payload: number };

type ContextType = {
  vault: Book[];
  AddToVault: (book: Book) => void;
  ToggleRead: (id: number) => void;
};
const initialState: State = {
  vault: [],
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

    default:
      return state;
  }
}

function BookState({ children }: { children: ReactNode }) {
  const [{ vault }, dispatch] = useReducer(reducer, initialState);

  function AddToVault(book: Book) {
    dispatch({ type: "added to vault", payload: book });
  }
  function ToggleRead(id: number) {
    dispatch({ type: "toggleRead", payload: id });
  }

  return (
    <BookContext.Provider value={{ vault, AddToVault, ToggleRead }}>
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
