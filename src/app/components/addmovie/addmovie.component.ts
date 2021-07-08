import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
})
export class AddmovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  hello = 'test';
  co = 'green';
  co1 = 'red';
  show = true;

  listeProduit: Product[] = [
    { id: 1, titre: 'hello1', qtt: 0,like:0,price:100 },
    { id: 2, titre: 'hellovvv1', qtt: 3,like:0,price:100 },
    { id: 3, titre: 'hevvllo1', qtt: 3,like:0,price:100 },
  ];
  price=1000;

  updateqtt(id: number,j:number) {
    console.log(j);

    const index = this.listeProduit.findIndex((item) => item.id === id);
    this.listeProduit[index].qtt--;
  }
  updateLike(id: number) {

    const index = this.listeProduit.findIndex((item) => item.id === id);
    this.listeProduit[index].like++;
  }
  addItem(newItem: Product) {

    this.listeProduit.push(newItem);
  }
}
