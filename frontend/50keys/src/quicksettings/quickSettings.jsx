import { useEffect, useState } from "react"
import styles from "./quickSettings.module.css"
import { AnimatePresence, motion } from "framer-motion"

const QuickSettings = () => {

  const [currMode, setCurrMode] = useState("selectTimes")

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
            <h3>15</h3>
            <h3>30</h3>
            <h3>60</h3>
            <h3>90</h3>
            <h3>120</h3>
            <h3>custom</h3>
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
            <h3>20</h3>
            <h3>50</h3>
            <h3>100</h3>
            <h3>150</h3>
            <h3>custom</h3>
          </div>

          </motion.div>
        }
      </div>
      </AnimatePresence>

    </div>

  )

}

export default QuickSettings
