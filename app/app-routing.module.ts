import { NgModule } from '@angular/core';
import { RooterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heros.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heros', component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RooterModule ]
})

export class AppRoutingModule {}
