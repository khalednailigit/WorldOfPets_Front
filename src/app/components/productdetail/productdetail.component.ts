import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
  @Input() item: Product;
  @Output() newItemEvent = new EventEmitter<number>();


  constructor() {}
  addNewItem(value: number) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {}
}
