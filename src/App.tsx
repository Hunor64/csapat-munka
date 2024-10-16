// import FAQ from './components/FAQ'
// import FidgetSpinner from './components/FidgetSpinner'
// import Modal from './components/Modal'

import React, { createContext, useState } from "react"
import LightSwitch from "./components/LightSwitch"

type ModeContextType = {
  mode: boolean
  setMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModeContext = createContext<ModeContextType | undefined>(undefined)

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <ModeContext.Provider value={{ mode: isDarkMode, setMode: setIsDarkMode }}>
      <div>
        <LightSwitch />
      </div>
    </ModeContext.Provider>
  )
}

export default App
