import Button from "components/button";
import styles from "./form.module.scss";
import CurrencyInput from "react-currency-input-field";
import Lancamento from "common/interfaces/lançamentos-interface";
import { useState } from "react";

interface Props {
  setLancamentos: React.Dispatch<React.SetStateAction<Lancamento[]>>;
}

function Form({ setLancamentos }: Props) {
  const [quantia, setQuantia] = useState('');
  const [conta, setConta] = useState("cash");
  const [tipo, setTipo] = useState("+");
  const [descricao, setDescricao] = useState("");

  function lancamentoUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLancamentos((atualState) => [
      ...atualState,
      {
        quantia,
        conta,
        tipo,
        descricao,
        hora: Date.now(),
      },
    ]);
  }

  return (
    <form
      id="lancamentoForm"
      className={styles.form}
      onSubmit={lancamentoUpdate}
    >
      <div className={styles.wrapper1}>
        <input
          className={styles.radioButton}
          type="radio"
          name="tipo"
          id="entrada"
          value="+"
          required
          onChange={(event) => setTipo(event.target.value)}
        />
        <label className={styles.radioLabel} htmlFor="entrada">
          Entrada
        </label>
        <input
          className={styles.radioButton}
          type="radio"
          name="tipo"
          id="saida"
          value="-"
          required
          onChange={(event) => setTipo(event.target.value)}
        />
        <label className={styles.radioLabel} htmlFor="saida">
          Saida
        </label>
        <select
          className={styles.select}
          id="contas"
          name="Conta"
          form="lancamentoForm"
          required
          onChange={(event) => setConta(event.target.value)}
        >
          <option value="Cash">Cash</option>
          <option value="Cartão">Cartão</option>
          <option value="Pix">Pix</option>
        </select>
      </div>
      <div className={styles.wrapper2}>
        <div className={styles.inputWrapper}>
          <label className={styles.inputTextLabel} htmlFor="valor">
            Valor
          </label>
          <CurrencyInput
            className={styles.inputText}
            id="valor"
            name="valor"
            prefix="R$ "
            decimalSeparator=","
            groupSeparator="."
            decimalsLimit={2}
            required
            onChange={event => setQuantia(event.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.inputTextLabel} htmlFor="descricao">
            Descrição
          </label>
          <input
            className={styles.inputText}
            type="text"
            name="descricao"
            id="descricao"
            placeholder="..."
            onChange={(event) => setDescricao(event.target.value)}
          />
        </div>
        <Button type="submit" buttonColor="#007AFF">
          Lançar!
        </Button>
      </div>
    </form>
  );
}

export default Form;
