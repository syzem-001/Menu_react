import { useState } from "react";
import "./App.css";
import MenuList from "./components/MenuList";
import { Myheader } from "./components/Myheader";

function App() {
  const [selectedcateg, setselectedcateg] = useState('all');

  return (
    <div className="bg-gray-800 text-white">
      <Myheader selectedcateg = {selectedcateg} setselectedcateg = {setselectedcateg}/>
      <main className="max-w-300 shadow-2xl p-4 mx-auto">
        <MenuList  selectedcateg ={selectedcateg}/>
      </main>
    </div>
  );
}

export default App;
