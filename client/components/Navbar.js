import { useRouter } from 'next/router';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import style from "../styles/Navbar.module.css";

const Navbar = () => {

    const router = useRouter();

  return (
    <>
    <nav className={style.navbarContainer}>
      <div className={style.iteminvisible}></div>
      <div className={style.navbarLogo}>
        <h1 onClick={()=>router.push("/")} >മല്ലു നിഘണ്ടു</h1>
      </div>
      <div onClick={()=>router.push("/login")} className={style.navbarLogin}>
        <PersonOutlineOutlinedIcon/>
        <span>Register / Login</span>
        <span>Login</span>
      </div>
    </nav>
    </>
  )
}

export default Navbar