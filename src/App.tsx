import './styles.css';
import './App.css';

import './1-task.ts';
import './1.a-task.ts';
import Timer from './2-task.tsx';
import Selector from './2-GetUser-task/selector.tsx';
import { useState } from 'react';

const tabsMap = {
  timer: <Timer />,
  getUser: <Selector />,
};

const tabs = Object.keys(tabsMap) as (keyof typeof tabsMap)[];
export default function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="App">
      <h1>Signal Interview</h1>
      <div className="stack">
        {tabs.map((tabName, i) => (
          <button className={tabName === activeTab ? 'active' : ''} key={i} onClick={() => setActiveTab(tabName)}>
            {tabName}
          </button>
        ))}
      </div>
      {tabsMap[activeTab]}
    </div>
  );
}
