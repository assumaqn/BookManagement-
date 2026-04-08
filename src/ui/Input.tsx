type inputType = {
  width: string;
  placeholder: string;
};

function Input({ width, placeholder }: inputType) {
  const focusWidth = "50px";
  return (
    <input
      type="search"
      className={`w-${width} rounded-lg bg-gray-300 px-2 py-2 text-sm placeholder:px-2 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-gray-400 focus:w-[${focusWidth}] transition-all duration-300`}
      placeholder={placeholder}
    />
  );
}

export default Input;
