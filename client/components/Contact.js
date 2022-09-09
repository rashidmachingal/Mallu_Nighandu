import style from '../styles/Contact.module.css'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showForm, setShowForm] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const data = {name,email,message}
        const res = await axios.post("http://localhost:5000/api/contact",data)
        const status = await res.data.status
        if(status==="OK"){
            setShowSuccess(true)
            setShowForm(false)
        }
    }

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
            {showForm ? <form onSubmit={handleSubmit} className={style.contactForm}>
                <div className={style.contactFormGroup}>
                    <input onChange={(e)=>setName(e.target.value)} value={name} required type="text" placeholder='Name' />
                </div>
                <div className={style.contactFormGroup}>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} required type="email" placeholder='Email' />
                </div>
                <div className={style.contactFormGroup}>
                    <textarea onChange={(e)=>setMessage(e.target.value)} value={message} required placeholder='Message'  rows="10"></textarea>
                </div>
                <div className={style.contactFormGroup}>
                   { isLoading ? <button disabled="true" ><CircularProgress size="25px" style={{ color: "#808080"}} /></button>  : <button>SEND</button>}
                </div>
            </form> : null}
            <div className={style.contactMethods} >
                <span><Link href="mailto:rashileocontact@gmail.com"><a>Email</a></Link></span>
                <span><Link href="https://twitter.com/rashimachingal" ><a>Twitter</a></Link></span>
                <span><Link href="https://www.linkedin.com/in/rashid-machingal/"><a>LinkedIn</a></Link></span>
                <span><Link href="https://www.instagram.com/rashi__leo/"><a>Instagram</a></Link></span>
            </div>
            {showSuccess ? <div className={style.contactSuccess}>
                <p>Successfully Send Message</p>
            </div> : null}
        </div>
    </div>
    </>
  )
}

export default Contact