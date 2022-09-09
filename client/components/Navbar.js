import style from "../styles/Navbar.module.css";
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  return (
    <>
    <nav className={style.navbarContainer}>
      <div className={style.navbarLogo}>
        <Link href="/" >
          <a><Image src="/mallu-nighandu-logo.png" width={340} height={73}/></a>
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar