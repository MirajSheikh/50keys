import { useContext, useEffect, useState } from "react"
import styles from "./keyboardToggle.module.css"
import { contexts } from "../App"

const KeyboardToggle = () => {

  const { setShowKeyboard } = useContext(contexts)

  const [hidden, setHidden] = useState(false)

  useEffect(() => {

    document.getElementById("toggle").style.transform = hidden ? "translateX(0)" : "translateX(25px)"
    document.getElementById("toggle").style.backgroundColor = hidden ? "hsl(45, 100%, 20%)" : "hsl(45, 100%, 50%)"
    setShowKeyboard(hidden ? false : true)

  }, [hidden])

  return(

    <div className={styles.keyboardToggle}>

      <h2>Keyboard</h2>

      <div className={styles.toggleBackground}>
        <div id="toggle" className={styles.toggleCircle} onClick={() => setHidden(!hidden)}></div>
      </div>

    </div>

  )

}

export default KeyboardToggle
