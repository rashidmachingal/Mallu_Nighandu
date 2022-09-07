import styles from "../styles/Content.module.css";
import Link from 'next/link'

const Content = () => {
  return (
    <>
      <div className={styles.contentContainer}>
        <div className={styles.contentBox}>
          <div className={styles.contentHeading}>
            <h1>What is Mallu Nighandu?</h1>
          </div>
          <div>
            <p>
              Mallu Nighandu is an English-Malayalam online dictionary web
              application created with olam.in dataset that mainly provides the
              Malayalam meaning of English words. Mallu Nighandu allows users to
              edit and update the meaning of words and add new words. <Link href="/what-is-mallu-nighandu" ><a>Read More...</a></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
