import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<Product>();

  constructor() {}

  qtt: number;
  titre: string;
  ngOnInit(): void {}

  add() {
    const produt = {
      titre: this.titre,
      qtt: this.qtt,
      id: 0,
      like: 0,
      price: 1000,
    };

    console.log('addd', produt);
    this.newItemEvent.emit(produt);
  }
}
