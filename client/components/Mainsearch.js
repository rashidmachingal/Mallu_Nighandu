import styles from '../styles/Mainsearch.module.css'
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import {  useState } from 'react';
import Image from 'next/image'

const MainSearch = ({data}) => {
  
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const router = useRouter();

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
    <div className={styles.homeContainer}>
        <div className={styles.homeBox}>
         <div className={styles.homeImage}>
           <Image width="140px" height="130px" src="https://scholar.rotaractmora.org/assets/img/cover-01.png" alt="" />
          </div>
          <div className={styles.homeTitles}>
            <h2>ഇംഗ്ലീഷ്  - മലയാളം നിഘണ്ടു </h2>
          </div>
          <div className={styles.homeSearch}>
            <form onSubmit={handleSearch}>
             <input onChange={handleFilter} value={wordEntered} placeholder='Search Word' type="mobile" />
            </form>
            <SearchIcon style={{ color: "#808080"}} />
          </div>
          {filteredData.length === 0 ? null : 
          
          <div className={styles.searchSuggetion}>
            <ul>
            {filteredData.slice(0,5).map((value, key) => {
            return (
                <li onClick={()=>router.push(`/english_malayalam/${value.english_word.toLowerCase()}`)} key={key}>{value.english_word} </li>
            );
          })}
            </ul>
          </div>

          }
          <div className={styles.homeAddWord}>
            <button onClick={()=>router.push("/add-new-word")} >പുതിയ ഒരു പദം ചേര്‍ക്കുക <AddIcon fontSize='x-small' /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSearch