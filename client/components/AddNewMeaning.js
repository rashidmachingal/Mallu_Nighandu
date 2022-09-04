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


const AddNewMeaning = ({word,setIsAddNewActive}) => {

  const [isClicked, setIsClicked] = useState(false)
  const [open, setOpen] = useState(false);
  const [partOf, setPartOf] = useState("")
  const [definition, setDefintion] = useState("")

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsClicked(true)
    let newData = [
      {
        english_word: word,
        part_of_speech:partOf,
        malayalam_definition:definition
      }
    ]
    const res = await axios.post("http://localhost:5000/api/add-new-word",newData)
    console.log(res.data)
    if (res.data.status==="OK"){
      handleClick()
      setTimeout(() => {
        setIsAddNewActive(false)
      }, 1600);
    }
  }

  return (
    <>
    <div className={styles.addNewContainer}>
        <div className={styles.addNewBox}>
          <div onClick={()=>setIsAddNewActive(false)} className={styles.addNewClose}>
          <CloseIcon fontSize="16px" />
          </div>
         <div className={styles.addNewTitle}>
          <h4><span>{word}</span> എന്ന വാക്കിന് മറ്റൊരു അർഥം ചേർക്കുക</h4>
         </div>
         <form onSubmit={handleSubmit} autoComplete='off' className={styles.addNewForm}>
          <div className={styles.addNewFormGroup}>
            <label>ഇംഗ്ലീഷ് പദം</label>
            <div>{word}</div>
          </div>
          <div className={styles.addNewFormGroup}>
            <label>രൂപം</label>
            <select onChange={(e)=>setPartOf(e.target.value)}>
                  {pos.map((i)=>{return  <option value={i.pos} key={i.pos} >{i.pos}</option>})}
            </select>
          </div>
          <div className={styles.addNewFormGroup}>
            <label>അർഥം</label>
            <input onChange={(e)=>setDefintion(e.target.value)} value={definition} placeholder='Meaning' type="text" />
          </div>
          <div className={styles.addNewFormGroup}>
            <button disabled={isClicked} >ADD</button>
          </div>
         </form>
        </div>
    </div>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully Added New Meaning
        </Alert>
    </Snackbar>
    </>
  )
}

export default AddNewMeaning