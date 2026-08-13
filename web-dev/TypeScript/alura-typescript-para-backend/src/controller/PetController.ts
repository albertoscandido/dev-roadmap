import { Request, Response } from "express";
import PetEntity from "../entities/PetEntity";
import EnumEspecie from "../enum/EnumEspecie";
import PetRepository from "../repositories/PetRepository";
import type TipoPet from "../types/TipoPet";

export default class PetController {

  constructor(private repository: PetRepository) {}

  async criaPet(req: Request, res: Response) {
    const {adotado, dataDeNascimento, nome, especie} = <PetEntity>req.body;

    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({error: "Especie inválida"});
    }
    
    const novoPet = new PetEntity();
    novoPet.adotado = adotado;
    novoPet.nome = nome;
    novoPet.especie = especie;
    novoPet.dataDeNascimento = dataDeNascimento;

    const petCriado = await this.repository.criaPet(novoPet);
    return res.status(201).json(petCriado);
  }

  async listaPet(req: Request, res: Response) {
    const listaDePets = await this.repository.listaPet();
    return res.status(200).json(listaDePets);
  }

  async atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.atualizaPet(
      Number(id),
      req.body as PetEntity
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async deletaPet(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.deletaPet(Number(id));

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }
}