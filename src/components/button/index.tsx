import styles from './button.module.scss'

interface Props {
    children: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    buttonColor?: string
}

function Button({children, type , buttonColor} : Props) {
  const styleBtn = {
    button: {
      backgroundColor : buttonColor
    } as const
  }
  return(
    <button type={type} className={styles.botao} style={styleBtn.button} >
                {children}
            </button>
  )
}
export default Button;