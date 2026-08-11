import { Request, Response } from "express";

const listaPets = [];

export default class PetController {
  criaPet(req: Request, res: Response) {
    const novoPet = req.body;
    listaPets.push(novoPet);
    return res.status(201).json(novoPet);
  }
}