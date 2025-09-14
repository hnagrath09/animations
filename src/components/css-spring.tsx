import { spring } from "motion";
import { useState } from "react";

export default function CssSpring() {
  const [state, setState] = useState(false);

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div
        data-state={state}
        style={{
          transition: `transform ${spring(0.5, 0.8)}`,
          transform: state
            ? "translateX(100%) rotate(180deg)"
            : "translateX(-100%)",
        }}
        className="size-24 bg-[#0055ff] rounded-md"
      />

      <button
        onClick={() => setState(!state)}
        className="bg-[#0055ff] p-2.5 rounded text-white m-2.5 cursor-pointer"
      >
        Toggle Position
      </button>
    </div>
  );
}
