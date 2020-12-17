import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidUpdateTempComponent } from './covid-update-temp/covid-update-temp.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {path: 'Covid' , component:CovidUpdateTempComponent},
  {path: 'Home', component:InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = 
[
  CovidUpdateTempComponent,
  InfoComponent
]
