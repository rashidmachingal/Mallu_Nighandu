import { useRouter } from 'next/router';
import style from "../styles/Navbar.module.css";

const Navbar = () => {

  const router = useRouter()

  return (
    <>
    <nav className={style.navbarContainer}>
      <div className={style.navbarLogo}>
        <h1 onClick={()=>router.push("/")} >മല്ലു നിഘണ്ടു</h1>
      </div>
    </nav>
    </>
  )
}

export default Navbar