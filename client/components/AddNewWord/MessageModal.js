import Modal from '@mui/material/Modal';
import styles from "../../styles/AddNewWord.module.css";
import { useRouter } from 'next/router';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MessageModal({isModalOpen, setIsModalOpen,existWord}) {

  const handleClose = () => setIsModalOpen(false);
  const router = useRouter();

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.messageModal} >
          <h3>{existWord} എന്ന വാക്ക് ഇതിനകം തന്നെ നിഘണ്ടുവിൽ ഉണ്ട് </h3>
          <p>
          {existWord} എന്ന വാക്കിന് പുതിയ അർഥം ചേർക്കാൻ {existWord} എന്ന വാക്കിന്റെ പേജിൽ ഉള്ള പുതിയ അർഥം 
          ചേർക്കുക എന്ന ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക
          </p>
          <button onClick={()=>router.push(`/english_malayalam/${existWord}`)} >OK</button>
        </div>
      </Modal>
    </div>
  );
}
