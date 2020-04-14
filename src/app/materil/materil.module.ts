import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,

} from '@angular/material';


const Material =[
  MatButtonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule 
]


@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterilModule { }
