import SearchIcon from "@mui/icons-material/Search";
import styles from '../styles/Result.module.css'

const Result = () => {
  return (
    <>
     <div className={styles.resultContainer}>
        <div className={styles.resultBox}>
          <div className={styles.resultSearch}>
            <SearchIcon style={{ color: "#808080" }} />
            <input defaultValue="speak" placeholder="Search Word" type="mobile"/>
          </div>
          <div className={styles.resultTitle}>
            <p>
              <span>shadow</span> എന്ന വാക്കിന്റെ അർഥം
            </p>
          </div>
          <div className={styles.resultMeaning}>
            <div className={styles.resultItems}>
              <h4>noun</h4>
              <ul>
               <li>- മറവ്‌ </li>
               <li>- നിഴല്‍ </li>
               <li>- തണല്‍ </li>
               <li>- നിഴലാട്ടം </li>
               <li>- ദ്യോതിപ്പിക്കുക </li>
               <li>- സന്തതസഹചാരി </li>
              </ul>
            </div>
            <div className={styles.resultItems}>
              <h4>verb</h4>
              <ul>
               <li>- രക്ഷിക്കുക </li>
               <li>- മങ്ങലാക്കുക </li>
               <li>- ഇരുളാക്കുക </li>
              </ul>
            </div>
          </div>

          <div className={styles.resultAddEdit}>
            <button>പുതിയ അർഥം ചേർക്കുക</button>
            <span>-</span>
            <button>തിരുത്തുക</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Result