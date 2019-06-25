import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactComponent } from './contacts/contact/contact.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'contacts',
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
