import styles from './box.module.scss'

interface Props {
  children: React.ReactNode
  title: string
}

export const Box = ({children, title}:Props) => {
  return (
    <>
      <section className={styles.box}>
        <h3>{title}</h3>
        {children}
      </section>
    </>
  )
}