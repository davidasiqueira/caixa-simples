import Form from "components/Form";
import styles from "./lancamentos.module.scss";
import Lancamento from "common/interfaces/lançamentos-interface";

interface Props {
  setLancamentos: React.Dispatch<React.SetStateAction<Lancamento[]>>;
}

function Lancamentos({ setLancamentos }: Props) {
  return (
    <div className={styles.wrapper}>
      <Form setLancamentos={setLancamentos} />
    </div>
  );
}
export default Lancamentos;
