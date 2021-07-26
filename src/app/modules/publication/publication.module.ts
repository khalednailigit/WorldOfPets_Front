import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListpublicationComponent } from './listpublication/listpublication.component';
import { PublicationComponent } from './publication.component';
import { PublicationRoutingModule } from './Publication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteModelPublicationComponent } from './delete-model-publication/delete-model-publication.component';
import { DeleteModelCommantaireComponent } from './delete-model-commantaire/delete-model-commantaire.component';
import { UpdateModelCommantaireComponent } from './update-model-commantaire/update-model-commantaire.component';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { ListerechercheComponent } from './listerecherche/listerecherche.component';



@NgModule({
  declarations: [ListpublicationComponent, PublicationComponent, DeleteModelPublicationComponent, DeleteModelCommantaireComponent, UpdateModelCommantaireComponent, ListerechercheComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PublicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ], entryComponents: [
    DeleteModelPublicationComponent,
    DeleteModelCommantaireComponent,
    UpdateModelCommantaireComponent
  ]
})
export class PublicationModule { }
