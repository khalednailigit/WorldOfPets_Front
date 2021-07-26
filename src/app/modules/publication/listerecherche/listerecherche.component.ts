import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PublicationService } from '../_services/publication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModelPublicationComponent } from '../delete-model-publication/delete-model-publication.component';
import { DeleteModelCommantaireComponent } from '../delete-model-commantaire/delete-model-commantaire.component';
import { UpdateModelCommantaireComponent } from '../update-model-commantaire/update-model-commantaire.component';

@Component({
  selector: 'app-listerecherche',
  templateUrl: './listerecherche.component.html',
  styleUrls: ['./listerecherche.component.scss']
})
export class ListerechercheComponent implements OnInit {

  constructor(private _cdr: ChangeDetectorRef,    private modalService: NgbModal,
    private PublicationService: PublicationService) { }

  ngOnInit(): void {
    this.get();
  }
  Publications: any;
  get() {
    this.Publications = null;
    this.PublicationService.getAllPublication().subscribe(list => {
      this.Publications = list;
    
      this.changeStatus();
    });
    
  }
  search;
  recherche(){
    
  }
  type(x) {
    // this.sales = [];
    // for (let index = 0; index < this.salesNNfilter.length; index++) {
    //   if (x === this.salesNNfilter[index].account_type) {
    //     this.sales.push(this.salesNNfilter[index]);
    //   } if (x === 'All') {
    //     this.sales = this.salesNNfilter;
    //   }
    // }
    // console.log("zzzzzzzzzzzzz");
    // console.log(this.sales);
  }

  publictaion = '';
  ajout() {
    this.PublicationService.createPub(this.publictaion).subscribe(res => {
      this.get();
      this.publictaion='';
    })


  }
  change='';
  changeid(id){
    this.change=id;
  }
  updateCommantaire(x){
    this.PublicationService.updateCommantaire(this.change,x).subscribe(res => {
      this.change='';
    });    
  }
  edit(id: number) {
    const modalRef = this.modalService.open(UpdateModelCommantaireComponent, { size: 'xl' });
    modalRef.componentInstance.id = id;
    modalRef.result.then(() =>
      this.get(),
      () => { }
    );
  }
  ajoutCommantaire(x, y) {

    this.PublicationService.createCommantaire(y, x).subscribe(res => {
      if (res) {
        this.changeStatus();
        this.publictaion = '';
        this.get();
      }
      // this.get();
    });

  }
  delete(id: number) {
    const modalRef = this.modalService.open(DeleteModelCommantaireComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => this.get(),
      () => { }
    );
  }
  deletePublication(id: number) {
    const modalRef = this.modalService.open(DeleteModelPublicationComponent);
    modalRef.componentInstance.id = id;
    modalRef.result.then(
      () => this.get(),
      () => { }
    );
  }
  changeStatus(): void {

    setTimeout(() => {

      this._cdr.detectChanges()
      this._cdr.markForCheck()

    }, 500);
  }
}
