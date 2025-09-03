import { useState } from "react";
import { motion } from "motion/react";
import { Switch as BaseSwitch } from "@base-ui-components/react";

export default function Switch() {
  const [checked, setChecked] = useState(false);

  return (
    <BaseSwitch.Root
      checked={checked}
      onCheckedChange={setChecked}
      render={
        <motion.button
          initial={false}
          style={{
            width: "120px",
            padding: "10px",
            justifyContent: checked ? "flex-end" : "flex-start",
          }}
          animate={{ backgroundColor: checked ? "#4ade80" : "#f43f5e" }}
        >
          <BaseSwitch.Thumb
            render={
              <motion.div
                layout
                style={styles.thumb}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            }
          />
        </motion.button>
      }
      className="p-2.5 flex justify-start rounded-full bg-[#8df0cc44] w-24 cursor-pointer"
    />
  );
}

const styles = {
  thumb: {
    width: 50,
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: "50%",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
};
