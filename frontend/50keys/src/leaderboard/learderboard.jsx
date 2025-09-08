import { useContext, useEffect, useRef, useState } from "react"
import styles from "./leaderboard.module.css"
import { contexts } from "../App"
import { AnimatePresence, motion } from "framer-motion"

const Leaderboard = () => {

  const { setShowLeaderboard } = useContext(contexts)

  const leaderboardRef = useRef(null)

  const [scores, setScores] = useState([
    {rank: 1, name: "Miraj", speed: 100},
    {rank: 2, name: "Moin", speed: 110},
    {rank: 3, name: "Gousim", speed: 120},
    {rank: 4, name: "Aman", speed: 150},
    {rank: 5, name: "Abc", speed: 50},
  ])

  useEffect(() => {

    function handleLeaderboardClose(e){
      if(leaderboardRef.current &&
      e.target.contains(leaderboardRef.current)){
        console.log(true)
        setShowLeaderboard(false)
      }
    }
    document.addEventListener("click", handleLeaderboardClose)

    return () => document.removeEventListener("click", handleLeaderboardClose)

  }, [])



  return(

      <motion.div key="leaderboard"
        initial={{x: 450}} 
        animate={{x: 0}} 
        exit={{x: 450}} 
        transition={{duration: 0.3}}>

        <div ref={leaderboardRef} className={styles.leaderboard} >

          <button className={styles.closeButton} onClick={() => setShowLeaderboard(false)}>Close</button>
          <h2 id={styles.title}>Leaderboards</h2>
          <h2 id={styles.subTitle}>Words 20</h2>
          <div className={styles.scores}>

            {scores.length > 0 && scores.map((score, i) => <div key={i} className={styles.score}>
              <h2>{score.rank}</h2>
              <h2>{score.name}</h2>
              <h2>{score.speed}</h2>
            </div>)}

          </div>

        </div>

      </motion.div>

  )

}

export default Leaderboard
