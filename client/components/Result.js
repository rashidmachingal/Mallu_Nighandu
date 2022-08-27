import SearchIcon from "@mui/icons-material/Search";
import styles from '../styles/Result.module.css'

const Result = ({word,data}) => {
  return (
    <>
     <div className={styles.resultContainer}>
        <div className={styles.resultBox}>
          <div className={styles.resultSearch}>
            <SearchIcon style={{ color: "#808080" }} />
            <input defaultValue={word} placeholder="Search Word" type="mobile"/>
          </div>
          <div className={styles.resultTitle}>
            <p>
              <span>{word}</span> എന്ന വാക്കിന്റെ അർഥം
            </p>
          </div>
          <div className={styles.resultMeaning}>
            {data.map((i,id)=>{
              return(
                <div className={styles.resultItems}>
                  <ul>
                    <li><span>{id+1}.</span> {i.malayalam_definition} {i.part_of_speech === "-" ? null : <i>({i.part_of_speech})</i>}</li>
                  </ul>
                </div>
              )
            })}
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