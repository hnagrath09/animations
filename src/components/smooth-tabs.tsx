import { useState } from "react";

const tabs = [
  {
    name: "Home",
    color: "bg-purple-500",
    content:
      "This is your home tab, where you can see all your recent activity",
  },
  {
    name: "DMs",
    color: "bg-blue-500",
    content: "This is your DMs tab, where you can see all your recent DMs",
  },
  {
    name: "Activity",
    color: "bg-green-500",
    content:
      "This is your Activity tab, where you can see all your recent activity",
  },
  {
    name: "More",
    color: "bg-red-500",
    content:
      "This is your More tab, where you can find a bunch of other stuff, like settings, help, etc.",
  },
];

export default function SmoothTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <div className="border border-slate-600 px-10 py-8 rounded-xl w-[408px] h-80 bg-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <span className={`size-6 rounded-full block ${activeTab.color}`} />
          <p className="text-slate-100">{activeTab.name}</p>
        </div>
        <p className="text-slate-500">{activeTab.content}</p>
      </div>

      <ul className="border flex border-slate-600 bg-slate-800 rounded-xl overflow-hidden">
        {tabs.map((tab, index) => (
          <li
            key={tab.name}
            className={`py-1 ${
              index === 0 ? "pl-1" : index === 3 ? "pr-1" : "px-1"
            }`}
          >
            <button
              className={`text-slate-100 w-24 p-2 text-sm rounded-lg cursor-pointer ${
                activeTab.name === tab.name ? `${tab.color}` : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
