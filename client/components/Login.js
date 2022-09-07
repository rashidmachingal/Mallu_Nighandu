import Link from 'next/link'
import styles from '../styles/Login.module.css'

const Login = () => {
  return (
    <>
    <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <div className={styles.loginTitle}>
            <h2>ലോഗിൻ ചെയ്യുക</h2>
          </div>
          <div className={styles.loginNotice}>
            <p>
            മല്ലു നിഘണ്ടുവിൽ പുതിയ ഒരു പദം ചേര്‍ക്കാൻ ലോഗിൻ ചെയ്യണമെന്നില്ല 
            എന്നാൽ ലോഗിൻ ചെയ്താൽ മറ്റു ഗുണങ്ങൾ ലഭിക്കുന്നതാണ്
            </p>
          </div>
          <form className={styles.loginForm}>
              <div className={styles.loginFormGroup}>
               <label>നിങ്ങളുടെ ഇ-മെയിൽ</label>
               <input placeholder="Enter Your Email" type="text" />
              </div>
              <div className={styles.loginFormGroup}>
               <label>പാസ്സ്‌വേർഡ്</label>
               <input placeholder="Password" type="text" />
              </div>
              <div className={styles.loginSubmitBtn}>
               <button>LOGIN</button>
              </div>
              <div className={styles.loginRegisterNew}>
                  <Link href="/register">പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കുക?</Link>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login 