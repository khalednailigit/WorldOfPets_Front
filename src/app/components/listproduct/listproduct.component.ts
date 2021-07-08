import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {

  constructor(private activateroute : ActivatedRoute) {
    console.log(this.activateroute.snapshot.params);

  }

  ngOnInit(): void {
  }

}
