import Lancamento from "@/common/interfaces/lançamentos-interface";
import {Table} from "@/components/table";

interface Props {
  lancamento: Lancamento[];
}

export const UltimosLancamentos = ({ lancamento }: Props) => {
  return (
    <div>
      <Table lancamento={lancamento} />
    </div>
  );
}

