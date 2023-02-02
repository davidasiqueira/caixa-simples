import Lancamento from "@/common/interfaces/lançamentos-interface";
import {Tr} from "./tr";
import styles from "./table.module.scss";

interface Props {
  lancamento: Lancamento[];
}

export const Table = ({ lancamento }: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <td>Quantia</td>
        <div>
          <td>Conta</td>
          <td>Hora</td>
        </div>
      </thead>
      <tbody>
        {lancamento.map((item) => (
          <Tr data={item} />
        ))}
      </tbody>
    </table>
  );
}

