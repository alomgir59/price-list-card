import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-4xl text-purple-500 font-bold my-6 mx-auto text-center">
        Hello from Tailwind CSS!!
      </h1>
      <PriceList></PriceList>
    </div>
  );
}

export default App;
