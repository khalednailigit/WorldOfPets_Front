import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListpublicationComponent } from './listpublication/listpublication.component';
import { PublicationComponent } from './publication.component';
import { ListerechercheComponent } from './listerecherche/listerecherche.component';


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
                path: 'listerecherche',
                component: ListerechercheComponent,
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
