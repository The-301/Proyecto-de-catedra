import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { CreateMedicineComponent } from './components/create-medicine/create-medicine.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/view' },
  { path: 'view', component: ViewComponent},
  { path: 'main', component: MainComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-medicine', component: CreateMedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }