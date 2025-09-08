import { useContext } from "react"
import styles from "./navbar.module.css"
import { contexts } from "../App"

const Navbar = () => {

  const { setShowLeaderboard } = useContext(contexts)

  return(

    <div className={styles.navbar}>

      <h2>50Keys_logo</h2>


      <div className={styles.navRight}>
        <h2>login</h2>
        <h2 onClick={() => setShowLeaderboard(true)}>leaderboards</h2>
      </div>

    </div>

  )

}

export default Navbar
