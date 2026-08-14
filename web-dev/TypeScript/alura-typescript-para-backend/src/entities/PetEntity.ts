import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";
import AdotanteEntity from "./AdotanteEntity";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome: string;

  @Column()
  adotado: boolean;

  @Column()
  dataDeNascimento: Date;

  @Column()
  especie: EnumEspecie;

  @Column({ nullable: true })
  porte?: EnumEspecie;

  @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets)
  adotante!: AdotanteEntity;

  constructor(
    nome: string,
    adotado: boolean,
    dataDeNascimento: Date,
    especie: EnumEspecie,
    porte?: EnumEspecie
  ) {
    this.nome = nome;
    this.adotado = adotado;
    this.dataDeNascimento = dataDeNascimento;
    this.especie = especie;
    this.porte = porte;
  }
}
