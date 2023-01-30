import Button from "components/button";
import styles from "./form.module.scss";
import CurrencyInput from "react-currency-input-field";

function Form() {
  return (
    <form id="lancamentoForm" className={styles.form}>
      <div className={styles.wrapper1}>
        <input
          className={styles.radioButton}
          type="radio"
          name="operacao"
          id="entrada"
          value="entrada"
          required
        />
        <label className={styles.radioLabel} htmlFor="entrada">
          Entrada
        </label>
        <input
          className={styles.radioButton}
          type="radio"
          name="operacao"
          id="saida"
          value="saida"
          required
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
            onValueChange={(value, name) => console.log(value, name)}
            required
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
