import { Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CartComponent } from './pages/cart/cart.component';
import { TutoComponent } from './pages/tuto/tuto.component';
import { ListitaComponent } from './pages/listita/listita.component';

export const routes: Routes = [
    {path: '', component:ListitaComponent},
    {path: 'cart', component:CartComponent},
    {path: 'prueba', component:TutoComponent}
    //{path: 'liston', component:ListitaComponent}
];
