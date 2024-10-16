import { useState } from "react"

const LightSwitch = () => {
    const [isDark, setIsDark] = useState(false)
  return (
    <div className="switch" onClick={()=> setIsDark(!isDark)}>
            <div className={isDark ? "isDark" : ""}></div>
    </div>
  )
}

export default LightSwitch