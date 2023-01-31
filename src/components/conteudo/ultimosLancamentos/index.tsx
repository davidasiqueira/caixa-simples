import Lancamento from "common/interfaces/lançamentos-interface";
import Table from "components/table";

interface Props {
  lancamento: Lancamento[];
}

function UltimosLancamentos({ lancamento }: Props) {
  return (
    <div>
      <Table lancamento={lancamento} />
    </div>
  );
}
export default UltimosLancamentos;
