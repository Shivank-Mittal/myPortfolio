import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const Material = [
  MatButtonModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatSnackBarModule
]


@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterilModule { }
