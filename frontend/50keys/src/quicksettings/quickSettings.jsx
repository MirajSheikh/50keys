import { useEffect, useState } from "react"
import styles from "./quickSettings.module.css"
import { AnimatePresence, motion } from "framer-motion"

const QuickSettings = () => {

  const [currMode, setCurrMode] = useState("selectTimes")
  const [timeSetting, setTimeSetting] = useState(0)
  const [wordSetting, setWordSetting] = useState(0)

  const timeOptions = [15, 30, 60, 90, 120, "custom"]
  const wordOptions = [20, 50, 100, 150, "custom"]

  useEffect(() => {

    function handleHighlight(){
      const highlighter = document.getElementById("highlighter")
      if(currMode === "selectTimes"){
        highlighter.style.transform = "translateX(-50px)"
      }
      if(currMode === "selectWords"){
        highlighter.style.transform = "translateX(50px)"
      }
    }

    handleHighlight()

  }, [currMode])

  function handleModeChange(e){
    if(e.target.id === "samay"){
      setCurrMode("selectTimes")
    }
    if(e.target.id === "shabd"){
      setCurrMode("selectWords")
    }
  }

  return(

    <div className={styles.quickSettings}>

      <div id="modeSelector" className={styles.modeSelector}>
        
        <h2 id="samay" onClick={handleModeChange}>
          Time
        </h2>
        <h2 id="shabd" onClick={handleModeChange}>
          Words
        </h2>
        <div id="highlighter" className={styles.modeHighlighter}></div>

      </div>

      <AnimatePresence>
      <div>
        {currMode === "selectTimes" && 
          <motion.div
            initial={{opacity: 0}} 
            animate={{opacity:1}} 
            exit={{opacity: 0}} 
            transition={{duration: 0.3}}>

          <div key={1} id="selectTimes" className={styles.selections}>
              {timeOptions.map((t, i) => (
                <h3 key={i} 
                    style={{color: `${i === timeSetting ? "hsl(45, 100%, 50%)" : "hsl(0, 0%, 50%)"}`}}
                    onClick={() => setTimeSetting(i)}>{t}</h3>
              ))}
          </div>

          </motion.div>
        }

        {currMode === "selectWords" && 
          <motion.div
            initial={{opacity: 0}} 
            animate={{opacity:1}} 
            exit={{opacity: 0}} 
            transition={{duration: 0.3}}>

          <div key={2} id="selectWords" className={styles.selections}>
              {wordOptions.map((w, i) => (
                <h3 key={i} 
                    style={{color: `${i === wordSetting ? "hsl(45, 100%, 50%)" : "hsl(0, 0%, 50%)"}`}}
                    onClick={() => setWordSetting(i)}>{w}</h3>
              ))}
          </div>

          </motion.div>
        }
      </div>
      </AnimatePresence>

    </div>

  )

}

export default QuickSettings
