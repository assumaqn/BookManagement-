import { useState } from "react";
import { CgProfile } from "react-icons/cg";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleClose() {
    setIsOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Input value:", inputValue);
    setInputValue("");
    handleClose();
  }

  return (
    <>
      <button
        className="flex cursor-pointer items-center gap-8 text-2xl"
        onClick={() => setIsOpen(true)}
      >
        <CgProfile />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">Enter Your Goal</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type here..."
                className="mb-4 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="rounded bg-gray-300 px-4 py-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
