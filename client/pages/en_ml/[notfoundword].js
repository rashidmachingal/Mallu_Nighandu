import React from 'react'
import styles from '../../styles/WordNotFound.module.css';
import { useRouter } from 'next/router'
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';

const WordNotFound = () => {
  const router = useRouter()
  const { notfoundword } = router.query
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    let trimmedWord = searchQuery.trim()
    if(!trimmedWord || trimmedWord.length<2 ||  /\d/.test(trimmedWord) ) return 
    router.push("/english_malayalam/"+ trimmedWord.toLowerCase())
  }
  

  return (
    <>
    <div className={styles.notContainer} >
      <div className={styles.notBox}>
      <div className={styles.notSearch}>
            <SearchIcon style={{ color: "#808080" }} />
            <form onSubmit={handleSearch}>
             <input onChange={(e)=>setSearchQuery(e.target.value)} defaultValue={notfoundword} placeholder="Search Word" type="mobile"/>
            </form>
      </div>
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