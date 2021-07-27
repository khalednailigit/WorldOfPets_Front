import { BaseModel } from "src/app/_metronic/shared/crud-table";


export interface Produits extends BaseModel {
  id: number;
  reference: string;
  designation: string;
  description: string;
  quantitestock: number;
  prix: number;
  statutannonce	: boolean;
}
