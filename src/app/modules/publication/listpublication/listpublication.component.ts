import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PublicationService } from '../_services/publication.service';

@Component({
  selector: 'app-listpublication',
  templateUrl: './listpublication.component.html',
  styleUrls: ['./listpublication.component.scss']
})
export class ListpublicationComponent implements OnInit {

  constructor(private _cdr: ChangeDetectorRef,private PublicationService: PublicationService) { }

  ngOnInit(): void {
    this.get();
  }
  Publications: any;
  get() {
    this.PublicationService.getAllPublication().subscribe(list => {
      console.log('samitttt');
      this.Publications = list;
      this.changeStatus();
      console.log(this.Publications);

    })
  }
  publictaion="";
  ajout(){
    this.PublicationService.createPub(this.publictaion).subscribe(res =>{
      this.get();
      this.publictaion='';
    })
    

  }
  changeStatus(): void {

    setTimeout(() => {

      this._cdr.detectChanges()
      this._cdr.markForCheck()

    }, 500);
  }
}
