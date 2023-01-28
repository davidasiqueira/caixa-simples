import styles from './nav.module.scss'
import { ReactComponent as ChartLogo } from "assets/chart.svg"
import { ReactComponent as StoreLogo } from "assets/store.svg"


function Nav() {
  return (
    <div className={styles.nav}>
      <ChartLogo />
      <StoreLogo />
    </div>
  )
}
export default Nav