import styles from '../styles/Mainsearch.module.css'
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import React, {  useState } from 'react';
import Image from 'next/image'
import OutsideAlerter from './OutsideAlerter';

const MainSearch = ({data}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [focused, setFocused] = useState(false)
    const router = useRouter();
    const OnFocus = () => setFocused(true)

    const handleSearch = (e) => {
      e.preventDefault()
      setIsLoading(true)
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
    <div className={styles.homeContainer}>
        <div className={`${styles.homeBox} mainBox `}>
         <div className={styles.homeImage}>
           <Image width="140px" height="130px" src="https://scholar.rotaractmora.org/assets/img/cover-01.png" alt="" />
          </div>
          <div className={styles.homeTitles}>
            <h2>ഇംഗ്ലീഷ്  - മലയാളം നിഘണ്ടു </h2>
          </div>
          <OutsideAlerter setFocused={setFocused} >
          <div className={styles.homeSearch}>
            <form onSubmit={handleSearch}>
             <input onFocus={OnFocus} onChange={handleFilter} value={wordEntered} placeholder='Search Word' type="mobile" />
            </form>
            {isLoading ? <CircularProgress size="25px" style={{ color: "#808080"}}  /> : <SearchIcon style={{ color: "#808080"}} />}
          </div>
          {filteredData.length > 0 && focused===true ? 
          
          <div className="searchSuggetion">
            <ul>
            {filteredData.slice(0,5).map((value, key) => {
            return (
                <li onClick={()=>{router.push(`/english_malayalam/${value.english_word.toLowerCase()}`), setIsLoading(true)}} key={key}>{value.english_word} </li>
            );
          })}
            </ul>
          </div>:null
          }
          </OutsideAlerter>
          <div className={styles.homeAddWord}>
            <button onClick={()=>router.push("/add-new-word")} >പുതിയ ഒരു പദം ചേര്‍ക്കുക <AddIcon fontSize='x-small' /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSearch

