import { Request, Response } from "express";
import EnumEspecie from "../enum/EnumEspecie";
import type TipoPet from "../types/TipoPet";

const listaPets:Array<TipoPet> = [];

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {
  criaPet(req: Request, res: Response) {
    const {adotado, dataDeNascimento, nome, especie} = req.body as TipoPet;
    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({error: "Especie inválida"});
    }
    const novoPet = {id: geraId(), dataDeNascimento, nome, especie, adotado};
    listaPets.push(novoPet);
    return res.status(201).json(novoPet);
  }

  listaPet(req: Request, res: Response) {
    return res.status(200).json(listaPets);
  }

  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, dataDeNascimento, especie, adotado } = req.body as TipoPet;
    const pet = listaPets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(400).json({ mensagem: "Pet não encontrado" });
    }
    pet.nome = nome;
    pet.dataDeNascimento = dataDeNascimento;
    pet.especie = especie;
    pet.adotado = adotado;
    return res.status(200).json(pet);
  }

  deletaPet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = listaPets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(400).json({ mensagem: "Pet não encontrado" });
    }
    const indice = listaPets.indexOf(pet);
    listaPets.splice(indice, 1);
    return res.status(204).json();
  }
}