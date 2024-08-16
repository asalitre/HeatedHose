import { Routes } from '@angular/router';
import { HeatedHoseComponent } from './components/heated-hose/heated-hose.component';

export const routes: Routes = [
    {path: '', redirectTo: 'Operations/Production/HeatedHose', pathMatch: 'full'},
    {path: 'Operations/Production/HeatedHose/:id', component: HeatedHoseComponent},
];
