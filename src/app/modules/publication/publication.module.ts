import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListpublicationComponent } from './listpublication/listpublication.component';
import { PublicationComponent } from './publication.component';
import { PublicationRoutingModule } from './Publication-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListpublicationComponent, PublicationComponent],
  imports: [
    CommonModule,
    FormsModule,
    PublicationRoutingModule
  ]
})
export class PublicationModule { }
