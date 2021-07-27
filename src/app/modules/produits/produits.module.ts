import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ShowProduitComponent } from './show-produit/show-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { DeleteProduitComponent } from './delete-produit/delete-produit.component';
import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits.component';

const routes: Routes = [
  {
      path: '',
      component: ProduitsComponent,
      children: [
          {
              path: 'show',
              component: ShowProduitComponent,
          },
          {
              path: 'delete',
              component: DeleteProduitComponent,
          },
          {
              path: 'add',
              component: AddProduitComponent
          },
          {
              path: 'edit',
              component: EditProduitComponent
          },
          {
              path: 'edit/:id',
              component: EditProduitComponent
          },
          { path: '', redirectTo: 'customers', pathMatch: 'full' },
          { path: '**', redirectTo: 'customers', pathMatch: 'full' },
      ],
  },
]

@NgModule({
  declarations: [AddProduitComponent, ShowProduitComponent, EditProduitComponent, DeleteProduitComponent],
  imports: [
    CommonModule
  ]
})
export class ProduitsModule { }
