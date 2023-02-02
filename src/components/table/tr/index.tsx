import Lancamento from "@/common/interfaces/lançamentos-interface";
import styles from "./tr.module.scss";

interface Props {
  data: Lancamento;
}

export const Tr = ({ data }: Props) => {
  return (
    <tr className={data.tipo === "+" ? styles.trGreen : styles.trRed}>
      <td>
        {data.tipo}{data.quantia}
      </td>
      <div>
        <td>{data.conta}</td>
        <td>{data.hora}</td>
      </div>
    </tr>
  );
}

