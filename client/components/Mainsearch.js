import styles from '../styles/Mainsearch.module.css'
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Image from 'next/image'

const MainSearch = () => {
    const [searchWord, setSearchWord] = useState("")
    const router = useRouter();
    const handleSearch = (e) => {
      e.preventDefault()
      let trimmedWord = searchWord.trim()
      if(!trimmedWord || trimmedWord.length<2 ||  /\d/.test(trimmedWord) ) return 
      router.push("/english_malayalam/"+ trimmedWord.toLowerCase())
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
            <SearchIcon style={{ color: "#808080"}} />
            <form onSubmit={handleSearch}>
             <input onChange={(e)=>setSearchWord(e.target.value)} value={searchWord} placeholder='Search Word' type="mobile" />
            </form>
          </div>
          <div className={styles.homeAddWord}>
            <button onClick={()=>router.push("/add-new-word")} >പുതിയ ഒരു പദം ചേര്‍ക്കുക <AddIcon fontSize='x-small' /></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSearch