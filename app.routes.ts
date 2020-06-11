import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/app/components/home/home.component';
import { SearchComponent } from './src/app/components/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'routePath' },
];

export const appRouting = RouterModule.forRoot(routes);
