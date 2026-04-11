import { Link } from "react-router-dom";

function Logo() {
  return (
    <h2 className="text-2xl font-extrabold capitalize text-gray-900">
      <Link to="/">Shelf Track</Link>
    </h2>
  );
}

export default Logo;
