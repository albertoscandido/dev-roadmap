import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  adotado: boolean;

  @Column()
  dataDeNascimento: Date;

  @Column()
  especie: EnumEspecie;

}