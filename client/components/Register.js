import styles from '../styles/Register.module.css'
import Link from 'next/link'

const Register = () => {
  return (
    <>
     <div className={styles.registerContainer}>
        <div className={styles.registerBox}>
          <div className={styles.registerTitle}>
            <h2>പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കുക</h2>
          </div>
          <div className={styles.registerNotice}>
            <p>
            മല്ലു നിഘണ്ടുവിൽ പുതിയ ഒരു പദം ചേര്‍ക്കാൻ ലോഗിൻ ചെയ്യണമെന്നില്ല 
            എന്നാൽ ലോഗിൻ ചെയ്താൽ മറ്റു ഗുണങ്ങൾ ലഭിക്കുന്നതാണ്
            </p>
          </div>
          <form className={styles.registerForm}>
              <div className={styles.registerFormGroup}>
               <label>നിങ്ങളുടെ പേര് </label>
               <input placeholder="Enter Your Name" type="text" />
              </div>
              <div className={styles.registerFormGroup}>
               <label>നിങ്ങളുടെ ഇ-മെയിൽ</label>
               <input placeholder="Enter Your Email" type="text" />
              </div>
              <div className={styles.registerFormGroup}>
               <label>പാസ്സ്‌വേർഡ്</label>
               <input placeholder="Password" type="text" />
              </div>
              <div className={styles.registerSubmitBtn}>
               <button>REGISTER</button>
              </div>
              <div className={styles.registerAlready}>
                  <Link href="/login">ഇതിനകം ഒരു അക്കൗണ്ട് ഉണ്ടോ?</Link>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register