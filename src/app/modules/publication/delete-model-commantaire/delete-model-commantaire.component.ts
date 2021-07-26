import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { PublicationService } from '../_services/publication.service';
@Component({
  selector: 'app-delete-model-commantaire',
  templateUrl: './delete-model-commantaire.component.html',
  styleUrls: ['./delete-model-commantaire.component.scss']
})
export class DeleteModelCommantaireComponent implements OnInit {

  @Input() id: number;
  isLoading = false;
  subscriptions: Subscription[] = [];

  constructor( private PublicationService: PublicationService, public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.isLoading = true;
    const sb = this.PublicationService.deleteCommantaire(this.id).pipe(
      delay(1000), // Remove it from your code (just for showing loading)
      tap(() => this.modal.close()),
      catchError((err) => {
        this.modal.dismiss(err);
        return of(undefined);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe();
    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
