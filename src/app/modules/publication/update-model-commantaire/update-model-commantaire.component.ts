import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, finalize, first, tap } from 'rxjs/operators';
import { CustomAdapter, CustomDateParserFormatter, getDateFromString } from '../../../_metronic/core';
import { PublicationService } from '../_services/publication.service';

@Component({
  selector: 'app-update-model-commantaire',
  templateUrl: './update-model-commantaire.component.html',
  styleUrls: ['./update-model-commantaire.component.scss'],
  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will w  ant to provide your main App Module
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class UpdateModelCommantaireComponent implements OnInit, OnDestroy {
  @Input() id: number;
  isLoading$;
  publication: any;
  formGroup: FormGroup;
  private subscriptions: Subscription[] = [];
  constructor(
    private publicationsService: PublicationService,
    private fb: FormBuilder, public modal: NgbActiveModal
    ) { }

  ngOnInit(): void {
    this.loadpublication();
  }

  loadpublication() {
    const sb = this.publicationsService.getPublicationById(this.id).pipe(
      first(),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of('');
      })
    ).subscribe((publication) => {
      this.publication = publication;
      this.loadForm();
    });
    this.subscriptions.push(sb);
  }

  loadForm() {
    this.formGroup = this.fb.group({
      // titre: [this.publication.titre],
      Description: [this.publication.Description],
      ImagePath: [this.publication.ImagePath],
      // UpdateDate: [this.publication.UpdateDate],
      // DateDePublication: [this.publication.DateDePublication],
      // CreateAt: [this.publication.CreateAt],
    });
  }

  save() {
    this.preparepublication();
      this.edit();    
  }

  edit() {
    const sbUpdate = this.publicationsService.update(this.publication).pipe(
      tap(() => {
        this.modal.close();
      }),
      catchError((errorMessage) => {
        this.modal.dismiss(errorMessage);
        return of(this.publication);
      }),
    ).subscribe(res => this.publication = res);
    this.subscriptions.push(sbUpdate);
  }

 
  private preparepublication() {
    const formData = this.formGroup.value;
    // this.publication.titre = formData.titre;
    this.publication.Description = formData.Description;
    this.publication.ImagePath = formData.ImagePath;
    this.publication.UpdateDate = new Date();
    // this.publication.DateDePublication = formData.DateDePublication;
    // this.publication.CreateAt = formData.CreateAt;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
