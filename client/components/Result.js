import SearchIcon from "@mui/icons-material/Search";
import styles from '../styles/Result.module.css'
import { useRouter } from 'next/router'
import { useState } from "react";

const Result = ({word,data}) => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    let trimmedWord = searchQuery.trim()
    if(!trimmedWord || trimmedWord.length<2 ||  /\d/.test(trimmedWord) ) return 
    router.push("/english_malayalam/"+ trimmedWord.toLowerCase())
  }

  return (
    <>
     <div className={styles.resultContainer}>
        <div className={styles.resultBox}>
          <div className={styles.resultSearch}>
            <SearchIcon style={{ color: "#808080" }} />
            <form onSubmit={handleSearch}>
             <input onChange={(e)=>setSearchQuery(e.target.value)} defaultValue={word} placeholder="Search Word" type="mobile"/>
            </form>
          </div>
          <div className={styles.resultTitle}>
            <p>
              <span>{word}</span> എന്ന വാക്കിന്റെ അർഥം
            </p>
          </div>
          <div className={styles.resultMeaning}>
            {data.map((i,id)=>{
              return(
                <div key={id} className={styles.resultItems}>
                  <ul>
                    <li><span>{id+1}.</span> {i.malayalam_definition} {i.part_of_speech === "-" | "" ? null : <i>({i.part_of_speech})</i>}</li>
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