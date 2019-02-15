import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGeneratorComponent } from './form-generator/form-generator.component';

const routes: Routes = [
  { path: 'form-generator', component: FormGeneratorComponent },
  { path: '', redirectTo: '/form-generator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
