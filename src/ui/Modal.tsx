import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* modal box animation */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-96 rounded-lg bg-white p-6"
            >
              <h2 className="mb-4 text-xl font-semibold">
                Enter how many books you want to read
              </h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="mb-4 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="rounded bg-gray-300 px-4 py-2"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
