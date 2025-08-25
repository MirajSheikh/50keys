import styles from "./quickSettings.module.css"

const QuickSettings = () => {

  return(

    <div className={styles.quickSettings}>

      <div className={styles.modeSelector}>
        <h2>Time</h2>
        <h2>Words</h2>
      </div>

      <div className={styles.selections}>
        <div id="selectTimes" className={styles.timeSelections}>
          <h3>15</h3>
          <h3>30</h3>
          <h3>60</h3>
          <h3>90</h3>
          <h3>120</h3>
          <h3>custom</h3>
        </div>

        <div id="selectWords" className={styles.wordSelections}>
          <h3>20</h3>
          <h3>50</h3>
          <h3>100</h3>
          <h3>150</h3>
          <h3>custom</h3>
        </div>
      </div>

    </div>

  )

}

export default QuickSettings
