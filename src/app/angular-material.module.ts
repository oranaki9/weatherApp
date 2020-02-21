import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule
} from "@angular/material";
@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule
  ]
})
export class AngularMaterialModule {}
