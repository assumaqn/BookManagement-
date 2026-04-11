type inputType = {
  width: string;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
};

function Input({ width, placeholder, onChange, value }: inputType) {
  return (
    <input
      type="search"
      value={value}
      className={`w-[${width}%] rounded-2xl bg-gray-300 px-2 py-2 text-sm transition-all duration-1000 placeholder:px-2 placeholder:text-xs focus:w-[30%] focus:outline-none focus:ring-2 focus:ring-gray-400`}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
