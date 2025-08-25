import styles from "./navbar.module.css"

const Navbar = () => {

  return(

    <div className={styles.navbar}>

      <h2>50Keys_logo</h2>


      <div className={styles.navRight}>
        <h2>login</h2>
        <h2>leaderboards</h2>
      </div>

    </div>

  )

}

export default Navbar
