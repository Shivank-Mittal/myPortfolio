import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule

} from '@angular/material';


const Material =[
  MatButtonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule 
]


@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterilModule { }
