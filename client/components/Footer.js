import styles from '../styles/Footer.module.css'
import { useRouter } from 'next/router';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  const router = useRouter();
  const handleClick = (link) => {
    router.push(link)
  };

  return (
    <>
     <br/><br/><hr />
      <div className={styles.footerContainer}>
        <div className={styles.footerBox}>
          <p>Developed by <span><a href="https://instagram.com/rashi__leo">Rashid Machingal</a></span></p>
          <div className={styles.socialIcons} >
           <Image width="17.5px" height="17.5px" onClick={()=>handleClick("https://instagram.com/rashi__leo")} style={{cursor:"pointer"}} src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="" />
           <GitHubIcon onClick={()=>handleClick("https://github.com/rashidmachingal")} style={{color: "#171515", cursor:"pointer"}} fontSize="small" />
           <LinkedInIcon onClick={()=>handleClick("https://www.linkedin.com/in/rashid-machingal/")} style={{color: "0077b5",cursor:"pointer"}} fontSize="small" />
           <TwitterIcon onClick={()=>handleClick("https://twitter.com/rashimachingal")} style={{color: "00acee",cursor:"pointer"}} fontSize="small" />
          </div>
          <div className={styles.footerLinks}>
            <Link href="/" ><a>Home</a></Link>
            <Link href="/what-is-mallu-nighandu" ><a>About</a></Link>
            <Link href="/contact" ><a>Contact</a></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer