import Tds from "common/interfaces/lançamentos-interface"
import Tr from "./tr"
import styles from "./table.module.scss"

const tData: Tds[] = [
  {
    tipo : '+',
    quantia : 1252.13,
    conta : 'cash',
    hora : '12:50'
  },
  {
    tipo : '-',
    quantia : 125.00,
    conta : 'cash',
    hora : '12:50'
  },
  {
    tipo : '+',
    quantia : 125.00,
    conta : 'cash',
    hora : '12:50'
  },
]

function Table() {
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
        {
          tData.map(item => (
            <Tr data={item}/>
          ))
        }
      </tbody>
    </table>
  )
}
export default Table