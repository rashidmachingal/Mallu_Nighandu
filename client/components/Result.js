import SearchIcon from "@mui/icons-material/Search";
import styles from '../styles/Result.module.css'
import style from '../styles/Mainsearch.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import OutsideAlerter from "./OutsideAlerter";

const Result = ({word,data,searchKeywords}) => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("")
  const [focused, setFocused] = useState(false)
  const router = useRouter()
  const OnFocus = () => setFocused(true)

  useEffect(() => {
    setWordEntered(word)
  }, [word])

  const handleSearch = (e) => {
    e.preventDefault()
    let trimmedWord = wordEntered.trim()
    if(!trimmedWord || trimmedWord.length<2 ||  /\d/.test(trimmedWord) ) return 
    router.push("/english_malayalam/"+ trimmedWord.toLowerCase())
  }

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = searchKeywords.filter((value) => {
      const regex = new RegExp(`^${searchWord}`,'gi')
      return value.english_word.match(regex);
    });
  
    if(searchWord===""){
      setFilteredData([])
    }else{
      setFilteredData(newFilter);
    }

  }

  return (
    <>
     <div className={styles.resultContainer}>
        <div className={styles.resultBox}>
          <OutsideAlerter setFocused={setFocused}>
           <div className={styles.resultSearch}>
            <SearchIcon style={{ color: "#808080" }} />
            <form onSubmit={handleSearch}>
             <input onFocus={OnFocus} onChange={handleFilter} value={wordEntered} defaultValue={word} placeholder="Search Word" type="mobile"/>
            </form>
           </div>
           {filteredData.length > 0 && focused===true ? 
          
          <div className={style.searchSuggetion}>
            <ul>
            {filteredData.slice(0,5).map((value, key) => {
            return (
                <li onClick={()=>{router.push(`/english_malayalam/${value.english_word.toLowerCase()}`), setFocused(false), setWordEntered(word) }} key={key}>{value.english_word} </li>
            );
          })}
            </ul>
          </div>:null
          }
          </OutsideAlerter>
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