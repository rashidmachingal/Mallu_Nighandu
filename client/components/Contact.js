import style from '../styles/Contact.module.css'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
    <div className={style.contactContainer}>
        <div className={`mainBox ${style.contactBox}`}>
            <div className={style.contactTitle}>
                <h1>Contact</h1>
            </div>
            <div className={style.contactMessage} >
                <p>Contact Us For Your Valuable Suggestions And Issues That We Have To Fix</p>
            </div>
            <form className={style.contactForm}>
                <div className={style.contactFormGroup}>
                    <input type="text" placeholder='Name' />
                </div>
                <div className={style.contactFormGroup}>
                    <input type="email" placeholder='Email' />
                </div>
                <div className={style.contactFormGroup}>
                    <textarea placeholder='Message'  rows="10"></textarea>
                </div>
                <div className={style.contactFormGroup}>
                    <button>SEND</button>
                </div>
            </form>
            <div className={style.contactMethods} >
                <span><Link href="mailto:rashileocontact@gmail.com"><a>Email</a></Link></span>
                <span><Link href="https://twitter.com/rashimachingal" ><a>Twitter</a></Link></span>
                <span><Link href="https://www.linkedin.com/in/rashid-machingal/"><a>LinkedIn</a></Link></span>
                <span><Link href="https://www.instagram.com/rashi__leo/"><a>Instagram</a></Link></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact