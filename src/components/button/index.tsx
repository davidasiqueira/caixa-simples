import styles from './button.module.scss'

interface Props {
    children: any
    type?: "button" | "submit" | "reset" | undefined
}

function Button({children, type} : Props) {
  return(
    <button type={type} className={styles.botao}>
                {children}
            </button>
  )
}
export default Button;