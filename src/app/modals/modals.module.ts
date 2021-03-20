import { PopupsModule } from './../popups/popups.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookmarkComponent } from './create-bookmark-modal/create-bookmark-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopupsComponent } from '../popups/popups/popups.component';



@NgModule({
  declarations: [CreateBookmarkComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PopupsModule,
  ]
})
export class ModalsModule { }
