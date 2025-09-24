import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

type SidebarProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function Sidebar({ open, onOpenChange }: SidebarProps) {
  return (
    <AnimatePresence>
      {open && (
        <div
          onClick={() => onOpenChange(false)}
          className="fixed inset-0 flex flex-col p-4 items-end justify-center bg-black/30"
        >
          <motion.div
            initial={{ x: "110%" }}
            animate={{ x: 0, transition: { ease: ["easeOut"], duration: 0.2 } }}
            exit={{ x: "110%" }}
            className="bg-white relative w-96 rounded-xl h-full my-auto ease-in"
          >
            <button
              onClick={() => onOpenChange(false)}
              className="ml-auto absolute top-2 right-2 cursor-pointer rounded-lg p-2 hover:bg-slate-100"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
