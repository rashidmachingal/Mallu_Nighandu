import React, { useState } from 'react'
import styles from '../styles/Result.module.css'
import CloseIcon from '@mui/icons-material/Close';
import pos from '../components/AddNewWord/partOfSpeech.js'

const EditMeaning = ({editWord,setIsEditActive}) => {

    const [isValid, setIsValid] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [open, setOpen] = useState(false);
    const [partOf, setPartOf] = useState(editWord.part_of_speech)
    const [definition, setDefintion] = useState("")

  return (
    <>
    <div className={styles.addNewContainer}>
        <div className={styles.addNewBox}>
          <div onClick={()=>setIsEditActive(false)} className={styles.addNewClose}>
          <CloseIcon fontSize="16px" />
          </div>
         <div className={styles.addNewTitle}>
          <h4>എഡിറ്റ് ചെയ്യുക</h4>
         </div>
         <form  autoComplete='off' className={styles.addNewForm}>
          <div className={styles.addNewFormGroup}>
            <label>ഇംഗ്ലീഷ് പദം</label>
            <div>{editWord.english_word}</div>
          </div>
          <div className={styles.addNewFormGroup}>
            <label>രൂപം</label>
            <select defaultValue={partOf} onChange={(e)=>setPartOf(e.target.value)}>
                  {pos.map((i)=>{return  <option value={i.pos} key={i.pos} >{i.pos}</option>})}
            </select>
          </div>
          <div className={styles.addNewFormGroup}>
            <label>അർഥം</label>
            <input onChange={(e)=>setDefintion(e.target.value)} defaultValue={editWord.malayalam_definition}  placeholder='Meaning' type="text" />
            {isValid ? <span>ദയവായി കളം പൂരിപ്പിക്കുക</span> : null}
          </div>
          <div className={styles.addNewFormGroup}>
            <button>UPDATE</button>
          </div>
         </form>
        </div>
    </div>
    </>
  )
}

export default EditMeaning