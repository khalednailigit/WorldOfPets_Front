import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListpublicationComponent } from './listpublication/listpublication.component';
import { PublicationComponent } from './publication.component';


const routes: Routes = [
    {
        path: '',
        component: PublicationComponent,
        children: [
            {
                path: 'list',
                component: ListpublicationComponent,
            },
            {
                path: 'products',
                // component: ProductsComponent,
            },
            {
                path: 'product/add',
                // component: ProductEditComponent
            },
            {
                path: 'product/edit',
                // component: ProductEditComponent
            },
            {
                path: 'product/edit/:id',
                // component: ProductEditComponent
            },
            { path: '', redirectTo: 'customers', pathMatch: 'full' },
            { path: '**', redirectTo: 'customers', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicationRoutingModule { }
