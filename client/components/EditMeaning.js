import React, { useState } from 'react'
import styles from '../styles/Result.module.css'
import CloseIcon from '@mui/icons-material/Close';
import pos from '../components/AddNewWord/partOfSpeech.js'
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditMeaning = ({editWord,setIsEditActive}) => {

    const [isValid, setIsValid] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [open, setOpen] = useState(false);
    const [partOf, setPartOf] = useState(editWord.part_of_speech)
    const [definition, setDefintion] = useState(editWord.malayalam_definition)

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const handleUpdate = async (e) => {
      e.preventDefault()
      if(definition === ""){
        setIsValid(true)
        return
      }
      setIsClicked(true)
      setIsValid(false)
      let updateData = 
        {
          english_word: editWord.english_word,
          part_of_speech:partOf,
          malayalam_definition:definition
        }
      
      const res = await axios.post(`http://localhost:5000/api/update-word-meaning/`+editWord._id,updateData)
      if (res.data.status==="OK"){
        handleClick()
        setTimeout(() => {
          setIsEditActive(false)
        }, 1600);
      }
    }

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
         <form onSubmit={handleUpdate} autoComplete='off' className={styles.addNewForm}>
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
            <button disabled={isClicked} >UPDATE</button>
          </div>
         </form>
        </div>
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully Updated Word Meaning
        </Alert>
    </Snackbar>
    </>
  )
}

export default EditMeaning