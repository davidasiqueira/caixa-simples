import styles from './nav.module.scss'
import { ChartLogo, StoreLogo } from '@/components/svgs'

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <ChartLogo />
      <StoreLogo /> 
    </div>
  )
}
