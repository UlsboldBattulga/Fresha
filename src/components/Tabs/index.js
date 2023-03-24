import { useState } from "react";

export function Tabs({ children }) {

  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="flex gap-2 p-2">
        {children.map((item, i) => {
          return (
            <div key={i}>
                <Tab
                  key={i}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
            </div>
          );
        })}
      </div>
      <div className="p-5" >
        {children.map((item, i) => {
          return (
            <div key={i} className={` ${i === activeTab ? "visible" : "hidden"}`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`px-5 py-3 cursor-pointer
      ${activeTab === currentTab ? "bg-white border-b-[2px] border-black" : "text-black"}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}
