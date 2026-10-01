import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-800 text-white">
      <header>
        <h1 className="text-center text-3xl font-bold">Our mune</h1>
      </header>
      <main className="max-w-300 shadow-2xl p-4 mx-auto">
        <MenuList />
      </main>
    </div>
  );
}

export default App;
