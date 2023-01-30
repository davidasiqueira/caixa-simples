import Form from "components/Form";
import styles from "./lancamentos.module.scss"
import Tds from "common/interfaces/lançamentos-interface";

interface Props {
  setLancamento: React.Dispatch<React.SetStateAction<Tds[]>>
}

function Lancamentos({setLancamento}: Props) {
  return(
    <div className={styles.wrapper}>
     <Form setLancamento={setLancamento}/>
    </div>
  )
}
export default Lancamentos;