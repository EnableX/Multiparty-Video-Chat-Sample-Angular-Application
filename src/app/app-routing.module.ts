import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfoComponent } from './pages/confo/confo.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'confo', component: ConfoComponent },
  { path: '**', component:  LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
