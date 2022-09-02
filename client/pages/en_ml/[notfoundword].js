import React, { useEffect } from 'react'
import styles from '../../styles/WordNotFound.module.css';
import style from '../../styles/Mainsearch.module.css'
import { useRouter } from 'next/router'
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';
import OutsideAlerter from "../../components/OutsideAlerter";
import data from '../../components/SearchKeywords.json'

const WordNotFound = () => {

  const [wordEntered, setWordEntered] = useState("")
  const [filteredData, setFilteredData] = useState([]);
  const [focused, setFocused] = useState(false)
  const router = useRouter()
  const { notfoundword } = router.query
  const OnFocus = () => setFocused(true)

  useEffect(() => {
    setWordEntered(notfoundword)
  }, [notfoundword])

  const handleSearch = (e) => {
    e.preventDefault()
    let trimmedWord = wordEntered.trim()
    if(!trimmedWord || trimmedWord.length<2 ||  /\d/.test(trimmedWord) ) return 
    router.push("/english_malayalam/"+ trimmedWord.toLowerCase())
  }

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
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
    <div className={styles.notContainer} >
      <div className={styles.notBox}>
        <OutsideAlerter setFocused={setFocused}>
          <div className={styles.notSearch}>
            <form onSubmit={handleSearch}>
             <input onFocus={OnFocus} onChange={handleFilter} value={wordEntered} placeholder="Search Word" type="mobile"/>
            </form>
            <SearchIcon style={{ color: "#808080" }} />
          </div>
          {filteredData.length > 0 && focused===true ? 
          
          <div className={style.searchSuggetion}>
            <ul>
            {filteredData.slice(0,5).map((value, key) => {
            return (
                <li onClick={()=>{router.push(`/english_malayalam/${value.english_word.toLowerCase()}`), setFocused(false), setWordEntered(notfoundword) }} key={key}>{value.english_word} </li>
            );
          })}
            </ul>
          </div>:null
          }
        </OutsideAlerter>
      <div className={styles.notMessage}>
        <h3>ക്ഷമിക്കുക</h3>
        <p>നിങ്ങള്‍ അന്വേഷിച്ച "{notfoundword}" എന്ന പദത്തിന്റെ അര്ത്ഥം കണ്ടെത്താനായില്ല. സാധ്യമെങ്കില്‍, ദയവായി നിഘണ്ടുവില്‍ ചേര്‍ക്കുക.</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default WordNotFound