import { createContext, useState } from "react";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import QuickSettings from "./quicksettings/quickSettings";

export const contexts = createContext();

function App() {

  const [showKeyboard, setShowKeyboard] = useState(true)

  return (
    <>

      <contexts.Provider value={{showKeyboard, setShowKeyboard}}>
        <Navbar />
        <QuickSettings />
        <Home />
      </contexts.Provider>

    </>
  )
}

export default App
