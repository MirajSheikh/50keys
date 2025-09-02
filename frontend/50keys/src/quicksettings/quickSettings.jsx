import { useContext, useEffect } from "react"
import styles from "./quickSettings.module.css"
import { AnimatePresence, motion } from "framer-motion"
import { contexts } from "../App"

const QuickSettings = () => {

  const { currMode, setCurrMode, setting, setSetting, timeOptions, wordOptions } = useContext(contexts)

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

      <AnimatePresence mode="wait">
        {currMode === "selectTimes" && 
          <motion.div key="selectTimes"
            initial={{opacity: 0}} 
            animate={{opacity:1}} 
            exit={{opacity: 0}} 
            transition={{duration: 0.1}}>

          <div key={1} id="selectTimes" className={styles.selections}>
              {timeOptions.map((t, i) => (
                <h3 key={i} 
                    style={{color: `${i === setting ? "hsl(45, 100%, 50%)" : "hsl(0, 0%, 50%)"}`}}
                    onClick={() => setSetting(i)}>{t}</h3>
              ))}
          </div>

          </motion.div>
        }

        {currMode === "selectWords" && 
          <motion.div key="selectWords"
            initial={{opacity: 0}} 
            animate={{opacity:1}} 
            exit={{opacity: 0}} 
            transition={{duration: 0.1}}>

          <div key={2} id="selectWords" className={styles.selections}>
              {wordOptions.map((w, i) => (
                <h3 key={i} 
                    style={{color: `${i === setting ? "hsl(45, 100%, 50%)" : "hsl(0, 0%, 50%)"}`}}
                    onClick={() => setSetting(i)}>{w}</h3>
              ))}
          </div>

          </motion.div>
        }
      </AnimatePresence>

    </div>

  )

}

export default QuickSettings
