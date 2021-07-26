import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PublicationService } from '../_services/publication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModelPublicationComponent } from '../delete-model-publication/delete-model-publication.component';
import { DeleteModelCommantaireComponent } from '../delete-model-commantaire/delete-model-commantaire.component';
import { UpdateModelCommantaireComponent } from '../update-model-commantaire/update-model-commantaire.component';

@Component({
  selector: 'app-listpublication',
  templateUrl: './listpublication.component.html',
  styleUrls: ['./listpublication.component.scss']
})
export class ListpublicationComponent implements OnInit {

  constructor(private _cdr: ChangeDetectorRef,    private modalService: NgbModal,
    private PublicationService: PublicationService) { }

  ngOnInit(): void {
    this.get();
  }
  Publications: any;
  Populaire=[];
  get() {
    this.Publications = null;
    this.Populaire=[];
    this.PublicationService.getAllPublication().subscribe(list => {
      this.Publications = list;
      for (let index = 0; index < this.Publications.length; index++) {
        const element = this.Publications[index];
        if(element.ImagePath != '' && element.commentaires.length>0){
          this.Populaire.push(element);
          
        }
      };
      this.changeStatus();
    });
    
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
