import { DataSource } from "typeorm";
import PetEntity from "../entities/PetEntity";

console.log('Current directory:', __dirname);
console.log('Entities path:', "src/entities/**/*.ts");
console.log('PetEntity loaded:', PetEntity);

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/database.sqlite",
  entities: [PetEntity],
  synchronize: true
});