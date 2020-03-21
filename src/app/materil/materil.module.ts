import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule

} from '@angular/material';


const Material =[
  MatButtonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule 
]


@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterilModule { }
