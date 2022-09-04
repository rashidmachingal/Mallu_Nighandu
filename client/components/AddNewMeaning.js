import React from 'react'
import styles from '../styles/Result.module.css'
import CloseIcon from '@mui/icons-material/Close';
import pos from '../components/AddNewWord/partOfSpeech.js'

const AddNewMeaning = ({word,setIsAddNewActive}) => {

  return (
    <div className={styles.addNewContainer}>
        <div className={styles.addNewBox}>
          <div onClick={()=>setIsAddNewActive(false)} className={styles.addNewClose}>
          <CloseIcon fontSize="16px" />
          </div>
         <div className={styles.addNewTitle}>
          <h4><span>{word}</span> എന്ന വാക്കിന് മറ്റൊരു അർഥം ചേർക്കുക</h4>
         </div>
         <div className={styles.addNewForm}>
          <div className={styles.addNewFormGroup}>
            <label>ഇംഗ്ലീഷ് പദം</label>
            <div>{word}</div>
          </div>
          <div className={styles.addNewFormGroup}>
            <label>രൂപം</label>
            <select>
                  {pos.map((i)=>{return  <option value={i.pos} key={i.pos} >{i.pos}</option>})}
            </select>
          </div>
          <div className={styles.addNewFormGroup}>
            <label>അർഥം</label>
            <input placeholder='Meaning' type="text" />
          </div>
          <div className={styles.addNewFormGroup}>
            <button>ADD</button>
          </div>
         </div>
        </div>
    </div>
  )
}

export default AddNewMeaning