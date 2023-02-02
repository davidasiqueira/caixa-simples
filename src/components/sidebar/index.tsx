import styles from './sidebar.module.scss'
// import  Logo  from "@/assets/logo.svg"
// import  AvatarLogo  from "@/assets/avatar.svg"
import { Nav }from './nav'

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* <Logo /> */}
      <Nav />
      {/* <AvatarLogo /> */}
    </div>
  )
}

