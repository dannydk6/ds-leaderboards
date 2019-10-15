import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material'
import { MatTableModule } from '@angular/material/table'

let modules = [MatToolbarModule, MatTableModule]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class AngularMaterialModule {}
