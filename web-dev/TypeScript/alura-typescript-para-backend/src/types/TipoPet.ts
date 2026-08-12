import EnumEspecie from "../enum/EnumEspecie";

type TipoPet = {
  id: number;
  nome: string;
  adotado: boolean;
  dataDeNascimento: Date;
  especie: EnumEspecie;
};

export default TipoPet;