import styles from './sidebar.module.scss'
import { AvatarLogo, Logo } from '../svgs'

// import  AvatarLogo  from "@/assets/avatar.svg"
import { Nav }from './nav'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Nav />
      <AvatarLogo />
    </div>
  )
}

