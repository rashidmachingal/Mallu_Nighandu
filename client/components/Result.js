import SearchIcon from "@mui/icons-material/Search";
import styles from '../styles/Result.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import OutsideAlerter from "./OutsideAlerter";
import CircularProgress from '@mui/material/CircularProgress';
import AddNewMeaning from "./AddNewMeaning";
import EditIcon from '@mui/icons-material/Edit';
import EditMeaning from "./EditMeaning";

const Result = ({word,data,searchKeywords,setIsUpdated,isUpdated}) => {

  const [isAddNewActive, setIsAddNewActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hoveredCart, setHoveredCart] = useState(-1);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("")
  const [focused, setFocused] = useState(false)
  const [isEditActive, setIsEditActive] = useState(false)
  const [editWord, setEditWord] = useState("")
  const router = useRouter()
  
const OnFocus = () => setFocused(true)
const showCartHandler = id => setHoveredCart(id)
const hideCartHandler= () => setHoveredCart(-1)

  useEffect(() => {
    setWordEntered(word)
    setIsLoading(false)
    return () => {
      setFocused(false)
    }
  }, [word])

  const checkEnterAgain = () => {
    if(wordEntered === word){
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

  const handleEditClick = (i) => {
    setEditWord(i)
    setIsEditActive(true)
  }

  return (
    <>
     <div className={styles.resultContainer}>
        <div className="mainBox">
          <OutsideAlerter setFocused={setFocused}>
           <div className="mainSearch">
            <form onSubmit={handleSearch}>
             <input onFocus={OnFocus} onChange={handleFilter} value={wordEntered} placeholder="Search Word" type="mobile"/>
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
                setWordEntered(word), 
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
                    <li onMouseLeave={hideCartHandler} onMouseEnter={()=>showCartHandler(id)} ><span>{id+1}.</span> {i.malayalam_definition} 
                    {i.part_of_speech === "-" | "" ? null : <i>({i.part_of_speech})</i>} 
                     <EditIcon 
                      onClick={()=>handleEditClick(i)}
                      style={{color:"rgba(0, 0, 0, 0.646)",
                      cursor:"pointer", 
                      fontSize:"13px", 
                      marginLeft:"3px",
                      display:hoveredCart === id? 'initial':'none'}} />
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>

          <div className={styles.resultAddEdit}>
            <button onClick={()=>setIsAddNewActive(true)}>പുതിയ അർഥം ചേർക്കുക</button>
          </div>

        </div>
      </div>
      {isAddNewActive ? 
      <AddNewMeaning 
       word={word} 
       setIsAddNewActive={setIsAddNewActive} 
       setIsUpdated={setIsUpdated} 
       isUpdated={isUpdated} /> 
       : null}
     
      {isEditActive ?  
      <EditMeaning 
       editWord={editWord} 
       setIsEditActive={setIsEditActive}
       setIsUpdated={setIsUpdated} 
       isUpdated={isUpdated} /> 
      : null }
    </>
  )
}

export default Result