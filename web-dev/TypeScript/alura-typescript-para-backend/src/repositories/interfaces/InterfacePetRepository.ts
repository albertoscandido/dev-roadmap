import PetEntity from "../../entities/PetEntity";

export interface InterfacePetRepository{
  criaPet(pet: PetEntity): void | Promise<void> | Promise<PetEntity>;
  
  listaPet(): Array<PetEntity> | Promise<PetEntity[]>;
  
  atualizaPet(
    id: number,
    pet: PetEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletaPet(id: number): Promise<{ success: boolean; message?: string }> | void;

  adotaPet(
    idPet: number,
    idAdotante: number
  ): Promise<{ success: boolean; message?: string }> | void;

  buscaPetPorCampoGenerico<T extends keyof PetEntity>(campo:T, valor: string): Array<PetEntity> | Promise<PetEntity[]>;
}