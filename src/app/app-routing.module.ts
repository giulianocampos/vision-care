import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AssetsComponent } from './routes/assets/assets.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'assets', component: AssetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
