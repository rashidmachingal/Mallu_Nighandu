import styles from "../styles/Content.module.css";

const Content = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>
          <div className={styles.contentHeading}>
            <h1>What is Mallu Nighandu?</h1>
          </div>
          <div className={styles.contentDesc}>
            <p>
              Mallu Nighandu is an English-Malayalam online dictionary web
              application that mainly provides the Malayalam meaning of English
              words. Mallu Nighandu allows users to edit and update the meaning
              of words and add new words.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
