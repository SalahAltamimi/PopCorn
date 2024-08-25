import { useState } from "react";

function Box({ children }) {
  const [show, setshow] = useState(true);
  return (
    <div className="bg-slate-700 rounded-md w-96 h-[70vh] mx-2 relative overflow-hidden">
      <button
        onClick={() => setshow((s) => !s)}
        className="bg-slate-400 rounded-full px-2 absolute top-2 right-3"
      >
        {show ? "-" : "+"}
      </button>
      {show && children}
    </div>
  );
}

export default Box;
