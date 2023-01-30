import Tds from "common/interfaces/lançamentos-interface";
import styles from './tr.module.scss'

interface Props {
  data: Tds;
}

function Tr({ data }: Props) {

  return (
    <tr className={(data.tipo === '+') ? styles.trGreen : styles.trRed}>
      <td>
        {data.tipo}R${data.quantia}
      </td>
      <div>
        <td>{data.conta}</td>
        <td>{data.hora}</td>
      </div>
    </tr>
  );
}
export default Tr;
