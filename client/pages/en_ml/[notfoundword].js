import React, { useEffect } from 'react'
import styles from '../../styles/WordNotFound.module.css';
import { useRouter } from 'next/router'
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';
import OutsideAlerter from "../../components/OutsideAlerter";
import data from '../../components/SearchKeywords.json'
import CircularProgress from '@mui/material/CircularProgress';
import Head from 'next/head'

const WordNotFound = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [wordEntered, setWordEntered] = useState("")
  const [filteredData, setFilteredData] = useState([]);
  const [focused, setFocused] = useState(false)
  const router = useRouter()
  const { notfoundword } = router.query

  const OnFocus = () => setFocused(true)

  useEffect(() => {
    setWordEntered(notfoundword)
    setIsLoading(false)
   
  }, [notfoundword])

    const checkEnterAgain = () => {
    if(wordEntered === notfoundword){
      setIsLoading(false)
    }
    }

  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)
    checkEnterAgain()
    let trimmedWord = wordEntered.trim()
    if(!trimmedWord || trimmedWord.length<2 ||  /\d/.test(trimmedWord) ) {
      setIsLoading(false)
      return 
    }
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
    <Head>
      <title>Sorry Word Not Found!</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <div className={styles.notContainer} >
      <div className={`${styles.notBox} mainBox`}>
        <OutsideAlerter setFocused={setFocused}>
          <div className="mainSearch">
            <form onSubmit={handleSearch}>
             <input onFocus={OnFocus} onChange={handleFilter} value={wordEntered || ""} placeholder="Search Word" type="mobile"/>
            </form>
            {isLoading ? <CircularProgress size="25px" style={{ color: "#808080"}}  /> : <SearchIcon style={{ color: "#808080"}} />}
          </div>
          {filteredData.length > 0 && focused===true ? 
          
          <div className="searchSuggetion">
            <ul>
            {filteredData.slice(0,5).map((value, key) => {
            return (
                <li onClick={()=>{router.push(`/english_malayalam/${value.english_word.toLowerCase()}`), 
                setFocused(false), 
                setWordEntered(notfoundword), 
                setIsLoading(true), 
                checkEnterAgain() }} 
                key={key}>{value.english_word} 
                </li>
            );
          })}
            </ul>
          </div>:null
          }
        </OutsideAlerter>
      <div className={styles.notMessage}>
        <h3>ക്ഷമിക്കുക</h3>
        <p>നിങ്ങള്‍ അന്വേഷിച്ച "{notfoundword}" എന്ന പദത്തിന്റെ അര്ത്ഥം കണ്ടെത്താനായില്ല. സാധ്യമെങ്കില്‍, ദയവായി നിഘണ്ടുവില്‍ ചേര്‍ക്കുക.</p>
        <button onClick={()=>router.push(`/add-new-word?notfoundword=${notfoundword}`)} >{notfoundword} നിഘണ്ടുവിൽ ചേർക്കുക </button>
      </div>
      </div>
    </div>
    </>
  )
}

export default WordNotFound