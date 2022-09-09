import styles from "../styles/Post.module.css";
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <div className={styles.postContainer}>
        <div className={`${styles.postBox} mainBox`}>
          <div className={styles.postTitle}>
            <h1>What is Mallu Nighandu?</h1>
          </div>
          <div className={styles.postAuthor} >
            <Image src="https://avatars.githubusercontent.com/u/90792555?v=4" width="26px" height="26px" />
            <span>By - Rashid</span>
            <span>Sep 09, 2022</span>
          </div>
          <div className={styles.postPara}>
            <p>
              Mallu Nighandu is an English-Malayalam online dictionary web
              application created with olam.in dataset that mainly provides the
              Malayalam meaning of English words. Mallu Nighandu allows users to
              edit and update the meaning of words and add new words.
            </p>
          </div>
          <div className={styles.postSubTitle}>
            <h2>Features</h2>
          </div>
          <div className={styles.postList}>
            <ul>
              <li>- English to Malayalam</li>
              <li>- Edit Word Meaning</li>
              <li>- Add New Meaning to Word</li>
              <li>- Add New Words</li>
              <li>- Bookmark Words</li>
            </ul>
          </div>
          <div className={styles.postSubTitle}>
            <h2>Who is the Founder?</h2>
          </div>
          <div className={styles.postPara}>
            <p>Mallu Nighandu was started in 2022 by Rashid Machingal.</p>
          </div>
          <div className={styles.postSubTitle}>
            <h2>How to Contact?</h2>
          </div>
          <div className={styles.postPara}>
            <p>
              You can contact me through Instagram, LinkedIn, Twitter, and
              email. All contact details are available on the <Link href="/contact" ><a>contact page</a></Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
