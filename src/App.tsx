import { useState } from "react";
// import CssSpring from "./components/css-spring";
import Sidebar from "./components/sidebar";
// import Switch from "./components/switch";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-screen h-screen bg-slate-100">
      <button onClick={() => setOpen(!open)}>Open</button>

      <Sidebar open={open} onOpenChange={setOpen} />
    </div>
  );
}

export default App;
