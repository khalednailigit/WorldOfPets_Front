import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstserviceService } from 'src/app/service/firstservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  index: number = 0;
  constructor(private service :FirstserviceService,private route :Router) { }

  ngOnInit(): void {
    this.service.showMsg();
  }
  goTo(){
    this.route.navigate(['/c1']);
  }

}
