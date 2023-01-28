import styles from './sidebar.module.scss'
import {ReactComponent as Logo } from "assets/logo.svg"
import { ReactComponent as AvatarLogo } from "assets/avatar.svg"
import Nav from './nav'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Nav />
      <AvatarLogo />
    </div>
  )
}

export default Sidebar