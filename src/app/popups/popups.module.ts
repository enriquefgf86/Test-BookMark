import { IonicModule } from '@ionic/angular';
import { PopupsComponent } from './popups/popups.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PopupsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class PopupsModule { }
