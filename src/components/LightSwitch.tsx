import { useContext } from "react"
import { ModeContext } from "../App"

const LightSwitch = () => {
  const ctx = useContext(ModeContext)

  return (
    <div className="switch" onClick={() =>ctx?.setMode(!ctx?.mode)}>
      <div className={ctx?.mode ? "isDark" : ""}></div>
    </div>
  )
}

export default LightSwitch
